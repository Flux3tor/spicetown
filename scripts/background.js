// please firefox work w/ background scripts pwease
// ok it didnt so im adding a certain something

const api = typeof browser !== "undefined" ? browser : chrome;
const isFirefox = typeof browser !== "undefined";
const userCache = {};

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
  }
});

async function fetchFeed() {
  const response = await fetch(`https://slack.com/api/conversations.history?channel=C0A3JN1CMNE&oldest=${Math.floor(Date.now() / 1000) - (7 * 24 * 60 * 60)}&limit=1000`, {
    headers: {"Authorization": "Bearer xoxb-2210535565-10363082154950-Q7Y1CHTqIKUSzgrpAKbLDvBk"}
  });
  const data = await response.json();

  console.log(data)

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

async function getSlackId(userId, apiKey) {
  if (userCache[userId]) return userCache[userId];
  try {
    const response = await fetch(`https://flavortown.hackclub.com/api/v1/users/${userId}`, {
      headers: {"Authorization": apiKey}
    });
    const data = await response.json();
    if (data.slack_id) {
      console.log(`DEBUG: Fetching API for user ${userId}...`);
      userCache[userId] = data.slack_id;
      return data.slack_id;
    } else {
      console.warn(`DEBUG: User ${userId} has no slack_id in API response`, data);
    }
  } catch (error) {console.error("ratelimited/api error", error);}
  return null;
}