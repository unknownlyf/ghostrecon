# GhostRecon

**Ghost-recon LinkedIn profiles through the public Google index. No login. No trace. No noise.**

A lightweight OSINT search tool that builds targeted Google dorks to surface publicly indexed LinkedIn profiles.

## What it does

Enter a name and optional keywords (e.g. *Bill Gates Microsoft*). The tool builds a precise Google query in this format:

site:linkedin.com/in "Bill Gates" Microsoft

…and opens it in a new tab. You see Google's public results — the same profiles Google already indexes.

## What it doesn't do

- Does not scrape LinkedIn
- Does not log in on your behalf
- Does not bypass privacy settings
- Does not notify anyone
- Does not use your LinkedIn account

## How it works

Most "anonymous LinkedIn viewers" either scrape LinkedIn (violating their ToS), require your login (which notifies the target), or quietly fail on most profiles. GhostRecon takes a different, honest approach: it builds a targeted Google dork and opens it in a new tab.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Deployed on Vercel

## Run locally

npm install
npm run dev

Open http://localhost:3000 in your browser.

## Live site

(https://ghostrecon-five.vercel.app/)

## License

MIT
