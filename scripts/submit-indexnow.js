#!/usr/bin/env node
// Usage: node scripts/submit-indexnow.js
// Submits all Alentro pages to IndexNow (Bing + indexnow.org)

const INDEXNOW_KEY = "11d4d6abab7b4ccabe5fee628da8df94";
const HOST = "alentro-website.vercel.app";

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
];

const payload = {
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
  urlList: URLS,
};

async function submitToIndexNow(endpoint) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return { endpoint, status: res.status, ok: res.ok };
}

async function main() {
  console.log("Submitting", URLS.length, "URLs to IndexNow...\n");
  URLS.forEach((u) => console.log(" ", u));
  console.log();

  const results = await Promise.allSettled([
    submitToIndexNow("https://www.bing.com/indexnow"),
    submitToIndexNow("https://api.indexnow.org/IndexNow"),
  ]);

  for (const r of results) {
    if (r.status === "fulfilled") {
      const { endpoint, status, ok } = r.value;
      console.log(`${ok ? "✓" : "✗"} ${endpoint} — HTTP ${status}`);
    } else {
      console.log(`✗ Failed:`, r.reason);
    }
  }
}

main().catch(console.error);
