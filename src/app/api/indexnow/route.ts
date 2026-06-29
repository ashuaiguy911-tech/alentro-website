import { NextResponse } from "next/server";

const INDEXNOW_KEY = "11d4d6abab7b4ccabe5fee628da8df94";
const HOST = "https://alentro-website.vercel.app";

const URLS = [
  `${HOST}/`,
  `${HOST}/services`,
  `${HOST}/about`,
  `${HOST}/contact`,
];

export async function POST() {
  try {
    const payload = {
      host: HOST.replace("https://", ""),
      key: INDEXNOW_KEY,
      keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: URLS,
    };

    const [bingRes, indexnowRes] = await Promise.allSettled([
      fetch("https://www.bing.com/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      }),
      fetch("https://api.indexnow.org/IndexNow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      }),
    ]);

    return NextResponse.json({
      success: true,
      urls: URLS,
      bing: bingRes.status === "fulfilled" ? bingRes.value.status : "failed",
      indexnow:
        indexnowRes.status === "fulfilled"
          ? indexnowRes.value.status
          : "failed",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Use POST to submit URLs" }, { status: 405 });
}
