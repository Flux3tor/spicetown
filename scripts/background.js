// please firefox work w/ background scripts pwease
// ok it didnt so im adding a certain something

const api = typeof browser !== "undefined" ? browser : chrome;
const isFirefox = typeof browser !== "undefined";
const userCache = {};
const slackNameCache = {};

api.runtime.onUpdateAvailable.addListener((details) => {
  api.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs[0]) {
      api.tabs.sendMessage(tabs[0].id, {type: "SHOW_UPDATE_POPUP", version: details.version});
    }
  });
});

api.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_SLACK_EMOJIS") {
    fetch("https://slack.com/api/emoji.list", {
      headers: {"Authorization": "Bearer xoxb-2210535565-10363082154950-Q7Y1CHTqIKUSzgrpAKbLDvBk"} // this is safe to expose because the only perm is to view emojis :D
                                                                                                   // hopefully? :3
    })
      .then(response => response.json())
      .then(data => sendResponse(data))
      .catch(error => sendResponse({ok: false, error: error.message}));
    return true;
  } else if (request.type === "OPEN_EXTENSIONS_PAGE") {
    const url = isFirefox ? "about:addons" : "chrome://extensions";
    api.tabs.create({url: url});
  } else if (request.type === "FETCH_WEEKLY_LEADERBOARD") {
    Promise.all([
      fetchFeed(),
      Promise.all(request.userIds.map(id => getSlackId(id, request.currentApiKey)))
    ]).then(([totals, slackIdList]) => {
      const result = {};
      request.userIds.forEach((id, i) => {
        const sId = slackIdList[i];
        result[id] = totals[sId] || 0;
      });
      sendResponse(result);
    });
    return true;
  } else if (request.type === "FETCH_COMMUNITY_VOTES") {
    fetchVotes(request.projectName).then(votes => {
      sendResponse(votes);
    });
    return true;
  }
});

async function fetchFeed() {
  const response = await fetch(`https://slack.com/api/conversations.history?channel=C0A3JN1CMNE&oldest=${Math.floor(Date.now() / 1000) - (7 * 24 * 60 * 60)}&limit=1000`, {
    headers: {"Authorization": "Bearer xoxb-2210535565-10363082154950-Q7Y1CHTqIKUSzgrpAKbLDvBk"}
  });
  const data = await response.json();

  const totals = {};

  if (data.ok) {
    data.messages.forEach(message => {
      if (!message.text) return;
      const match = message.text.match(/<@([A-Z0-9]+)>.*?Balance\s+([+-]\d+)/i);
      if (match) {
        const slackId = match[1];
        const change = parseInt(match[2]);
        totals[slackId] = (totals[slackId] || 0) + change;
      }
    });
  }
  return totals;
}

async function fetchVotes(projectName) {
  let allMessages = [];
  let cursor = null;
  let hasMore = true;

  try {
    while (hasMore) {
      const url = new URL("https://slack.com/api/conversations.history");
      url.searchParams.append("channel", "C0A2DTFSYSD");
      url.searchParams.append("limit", "100");
      if (cursor) url.searchParams.append("cursor", cursor);

      const response = await fetch(url.toString(), {
        headers: {"Authorization": "Bearer xoxb-2210535565-10363082154950-Q7Y1CHTqIKUSzgrpAKbLDvBk"}
      });
      const data = await response.json();

      if (!data.ok) {
        console.error("slack api error:", data.error);
        break;
      }

      allMessages = allMessages.concat(data.messages);
      cursor = data.response_metadata?.next_cursor;
      hasMore = !!(data.has_more && cursor);
    }

    const target = projectName.toLowerCase().trim();

    const filteredMessages = allMessages.filter(msg => {
      if (!msg.blocks || msg.blocks.length < 2) return false;
      const headerText = msg.blocks[1]?.text?.text || "";
      return headerText.toLowerCase().includes(`*${target}*`);
    });

    const votePromises = filteredMessages.map(async (msg) => {
      const voterMatch = (msg.text || "").match(/Voted by:\s*<?@?([A-Z0-9\._-]+)>?/i);
      const voterId = voterMatch ? voterMatch[1] : null;
      
      let displayName = "Unknown";
      if (voterId) {
        displayName = await getSlackDisplayName(voterId);
      }

      let voteComment = "voted for this project!";
      if (msg.blocks[3]?.text?.text) {
        voteComment = msg.blocks[3].text.text;
      }

      return {
        voter: displayName,
        text: voteComment,
        ts: msg.ts
      };
    });

    return await Promise.all(votePromises);
  } catch (error) {
    console.error("Vote fetch failed", error);
    return [];
  }
}

async function getSlackId(userId, apiKey) {
  if (userCache[userId]) return userCache[userId];
  try {
    const response = await fetch(`https://flavortown.hackclub.com/api/v1/users/${userId}`, {
      headers: {"Authorization": apiKey}
    });
    const data = await response.json();
    if (data.slack_id) {
      userCache[userId] = data.slack_id;
      return data.slack_id;
    }
  } catch (error) {console.error("ratelimited/api error", error);}
  return null;
}

async function getSlackDisplayName(userId) {
  if (slackNameCache[userId]) return slackNameCache[userId];
  try {
    const response = await fetch(`https://slack.com/api/users.info?user=${userId}`, {
      headers: {"Authorization": "Bearer xoxb-2210535565-10363082154950-Q7Y1CHTqIKUSzgrpAKbLDvBk"}
    });
    const data = await response.json();
    if (data.ok && data.user) {
      const name = data.user.profile.display_name || data.user.real_name || data.user.name;
      slackNameCache[userId] = name;
      return name;
    }
  } catch (error) {
    console.error("failed  to fetch user info", error);
  }

  return userId;
}