![Spicetown logo](https://i.ibb.co/yBhBsGyf/Group-11-1.png)

[![GitHub last commit](https://img.shields.io/github/last-commit/SabioOfficial/spicetown?style=for-the-badge)](https://github.com/SabioOfficial/spicetown/commits/main/)
![Latest version](https://img.shields.io/amo/v/spicetown?style=for-the-badge&label=LATEST%20VER)

Spicetown is a QoL-focused extension for Chrome and Firefox that improves the flow of Flavortown with themes, extra (important) project info, and more in the works.

## Table of contents

- [Features](#features)
  - [Utils Comparison](#utils-comparison)
  - [Project Stats+](#project-stats)
    - [Examples](#examples-project-stats)
  - [Settings+](#settings)
  - [Themes (WIP)](#themes)
    - [Implementing Themes (V2, WIP)](#implementing-themes)
    - [Ruby (WIP)](#themes-ruby)
    - [Catppuccin (WIP)](#themes-catppuccin)
      - [Catppuccin Mocha (WIP)](#themes-catppuccin-mocha)
      - [Catppuccin Macchiato (WIP)](#themes-catppuccin-macchiato)
    - [Charcoal (WIP)](#themes-charcoal)
    - [Midnight (WIP)](#themes-midnight)
- [Installation](#installation)
  - [From Source](#from-source)
  - [From Webstore](#from-webstore)
- [Improvements](#improvements)
- [Providers](#providers)
  - [Chrome Web Store](#providers-chrome)
  - [Firefox Add-Ons](#providers-firefox)
  - [GitHub (Unstable)](#providers-github)

## Features

Spicetown-integrated features are the main focus of Spicetown. These usually improve the flow of Flavortown. Currently, there are **3** features available for public use. Feel free to contribute and add new features.

### Utils Comparison

| Feature | Utils | Spicetown |
| --- | --- | --- |
| Website | x | ✓ |
| Random Project | x | ✓ |
| Hotkeys | x | ✓ |
| Fade-in Animation | x | ✓ |
| User Explore | x | ✓ |
| Streaks | x | ✓ |
| Sidebar Editor | x | ✓ |
| User Searching | x | ✓ |
| Pocket Watcher | x | ✓ |
| Themes (Count) | 6 | 9 |
| Public Votes | Partial | ✓ |
| Themes | Partial | ✓ |
| Extra Proj. Info | ✓ | ✓ |
| Markdown Editor | ✓ | ✓ |
| Inline Devlogging | ✓ (Dec 21) | ✓ (Jan 31) |
| Changelog Generator | ✓ (Jan 31) | ✓ (Jan 25) |
| Data Management | ✓ (Jan 24) | ✓ (Jan 25) |
| Project Searching | ✓ (Dec 24) | ✓ (Dec 23) |
| Emojis Rendering | ✓ (Jan 25) | ✓ (Jan 24) |
| Next Ship Payout Estimation | ✓ (Jan 31) | ✓ (Jan 28) |
| Shop Item Extra Info | ✓ (Different) | ✓ (Different) |
| Markdown Previewer | ✓ (Different) | ✓ (Different) |
| Better Shop Goals | ✓ (Different) | ✓ (Different) |
| Exposed Achievements | ✓ | x (Removed) |
| Better Kitchen | ✓ | Partial |
| Extra Ship Info | ✓ | Partial |
| Better Leaderboard | ✓ | Partial |
| Custom Theme | ✓ | Flawed |
| Auto-claim Achievements | ✓ | x |
| Admin Theming | ✓ | x |
| Better Vote History | ✓ | x |
| Doomscroll Devlogs | ✓ | x |
| shots.so Integration | ✓ | x |
| Better Achievements | ✓ | x |
| Raycast | ✓ | x |
| Devlog Editing Version History | ✓ | x |
| Speed Reading | ✓ | x |
| Link Finder | ✓ | x |
| Screenshot Annotator | ✓ | x |
| Ship Effiency Graph | ✓ | x |
| Inline Devlog Editing | ✓ | x |

*Checked by Utils owner, Hridya*

### Project Stats+

_Also known as "Extra Project Stats"_

Project Stats+ adds minutes per devlog tracking and time-per-day tracking. Both show ratings for whether they are at recommended levels.

| Minutes / per devlog | Rating |
| --- | --- |
| ≥150, ≤9 | Awful |
| 120-149, 10-14 | Bad |
| 101-119, 15-19 | Okay |
| 81-100, 20-39 | Good |
| 40-80 | Great |

| Time / per day | Rating |
| --- | --- |
| ≤29m | Awful |
| 30m-59m | Bad |
| 1hr-1hr 59m | Okay |
| 2hrs-2hr 59m | Good |
| ≥3hrs | Great |

#### Examples

These are all randomly selected projects (except for Spicetown).

![Screenshot 2025 12 20 122712](https://i.ibb.co/pj2FYzfG/Screenshot-2025-12-20-122712.png)
![Screenshot 2025 12 20 122852](https://i.ibb.co/KpjfMB0V/Screenshot-2025-12-20-122852.png)
![Screenshot 2025 12 20 122934](https://i.ibb.co/wNV0f1L7/Screenshot-2025-12-20-122934.png)
![Screenshot 2025 12 20 123044](https://i.ibb.co/FkKthN5S/Screenshot-2025-12-20-123044.png)

### Settings+

_Also known as "Spicetown Settings"_

Settings+ adds "Screenshare Mode" ([concept discussion](https://hackclub.slack.com/archives/C09MPB8NE8H/p1766001569993999)), which hides most sensitive elements (see [issue #3](https://github.com/SabioOfficial/spicetown/issues/3)). It replaces blur, which is known to be unsafe. More settings are in the works and will be released soon.

| Setting | Released | Maintained | Issues |
| --- | --- | --- | --- |
| Screenshare Mode | TBD (In-dev 17/12/25) | No | Yes ([#3](https://github.com/SabioOfficial/spicetown/issues/3)) |

### Themes

Spicetown supports themes for Flavortown, modifying the colors and vibe to your liking. Currently, there are **2** themes available to choose from (**1** Flavortown-integrated).

| Theme | Color | Released | Maintained | Issues |
| --- | --- | --- | --- | --- |
| Ruby | Red | TBD (In-dev 19/12/25) | Yes | None |
| Catppuccin Mocha | Lavender | TBD (In-dev 21/12/25) | Yes | None |
| Catppuccin Macchiato | Mauve | TBD (In-dev 21/12/25) | Yes | None |
| Charcoal | Gray | TBD (In-dev 23/12/25) | Yes | None |

#### Implementing Themes

To implement themes, open the `content.css` file in `/scripts`. You will find `[data-theme="bg-color-ruby"]` along with other themes. Add a new theme by creating a new data theme, for example: `[data-theme="bg-color-log"]`. Use existing themes as a template for the CSS variables you need. You also need to add a new `themes__div-option` to the themes page in `addThemesPage()` in `content.js`.

#### Ruby

Ruby is the first custom theme of Spicetown (and probably Flavortown as a whole). It is in heavy development. You can enable the Ruby theme via the Themes page (inaccessible to non-Spicetown users). It consists of mostly dark-ish red.

#### Catppuccin

**Catppuccin** is the most requested theme family for **Spicetown**. The first Catppuccin theme was released (in-dev) on **21/12/25**. This is also the first theme family for **Spicetown**.

##### Catppuccin Mocha

**Catppuccin Mocha** is the first Catppuccin theme to be added. It is the second theme added to **Spicetown** after Ruby. It uses a lavender-based design.

##### Catppuccin Macchiato

**Catppuccin Macchiato** is the second Catppuccin theme to be added. It is the third theme added to **Spicetown** after Catppuccin Mocha. Because of Neon, one of the Flavortown dev requests, this theme uses a mauve design. This theme is a work in progress.

#### Charcoal

**Charcoal** is the fourth theme added to **Spicetown** after Catppuccin Macchiato. Originally the theme would have everything on fire, but it looked too much like a Halloween theme. Until more projects ship so I can test voting CSS, this is a work in progress.

#### Midnight

**Midnight** is the fifth theme added to **Spicetown** after Charcoal (made by Joko26). This theme is designed to be a dark-mode theme inspired by the dark and cozy feel of Dracula themes.

## Installation

### From Source

Click on "Code", download the zip, go to `chrome://extensions` (or the equivalent in your browser), unzip your file, and drag the folder in.

### From Webstore

| Browser | Link |
| --- | --- |
| Chromium (Chrome, Arc, Edge, etc) | [Chrome Web Store](https://chromewebstore.google.com/detail/spicetown/kbcbgiihiopcbgimdopcfcemikagemgl) |
| Firefox | [Firefox Addons](https://addons.mozilla.org/en-US/firefox/addon/spicetown/) |

## Improvements

Spicetown regularly improves existing Flavortown features. These improvements either update the UI or add hidden, scrapped Flavortown functionality back into Flavortown.

| Improvement | Page / Feature | Released | Maintained | Issues |
| --- | --- | --- | --- | --- |
| Exposed Achievements | Achievements | TBD (In-dev 19/12/25) | No (Deprecated) | None |
| Voting+ | Voting | TBD (In-dev 19/12/25) | No | None |

## Providers

Providers are the websites that allow you to install the extension. This includes Chrome Web Store, Firefox Addons, and GitHub (unstable).

### Warning

Chrome Web Store usually takes more time to review stable versions when they come out. Please use the [Firefox version](#providers-firefox) instead if you have Firefox.

### Chrome Web Store

![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/kbcbgiihiopcbgimdopcfcemikagemgl?style=for-the-badge)

Usually a few hours behind Firefox Addons' Spicetown stable version.

### Firefox Addons

![Mozilla Add-on Version](https://img.shields.io/amo/v/spicetown?style=for-the-badge)

The official Firefox Addons page for Spicetown. Always up to date due to automated version reviewing by Firefox Addons.

### GitHub

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/SabioOfficial/spicetown?style=for-the-badge)

Also known as Lunar edition. Latest update, always, even if it is not stable.
