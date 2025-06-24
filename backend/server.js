import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { 
  juriStreamers, kenStreamers, lukeStreamers, akumaStreamers, zangiefStreamers,
  terryStreamers, cammyStreamers, hondaStreamers, akiStreamers, maiStreamers,
  ryuStreamers, jpStreamers 
} from "./streamerList.js";

const app = express();
app.use(cors());

import path from "path";
import { fileURLToPath } from "url";

// Add these lines to get __dirname in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend files (adjust path as needed)
app.use(express.static(path.join(__dirname, "../public")));



const clientId = process.env.TWITCH_CLIENT_ID || "6tn5unrr0xiau7qmeihljr1uk628nm";
const clientSecret = process.env.TWITCH_CLIENT_SECRET || "gl4v4exjfj9sr225q0ep9llxax6y8q";

let cachedToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  const res = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    }),
  });

  if (!res.ok) {
    console.error("❌ Token request failed:", await res.text());
    throw new Error("Failed to get Twitch access token");
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiry = now + data.expires_in * 1000;
  return cachedToken;
}

async function getLiveCount(streamers) {
  const token = await getAccessToken();
  let count = 0;

  for (const name of streamers) {
    const res = await fetch(`https://api.twitch.tv/helix/streams?user_login=${name}`, {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (data?.data?.length > 0) count++;
    await new Promise((r) => setTimeout(r, 300));
  }

  return count;
}

// Characters and their streamer lists
const characterMap = {
  juri: juriStreamers,
  ken: kenStreamers,
  luke: lukeStreamers,
  akuma: akumaStreamers,
  zangief: zangiefStreamers,
  terry: terryStreamers,
  cammy: cammyStreamers,
  honda: hondaStreamers,
  aki: akiStreamers,
  mai: maiStreamers,
  ryu: ryuStreamers,
  jp: jpStreamers,
};

// Create route for each character
for (const [charName, streamers] of Object.entries(characterMap)) {
  app.get(`/api/livecount/${charName}`, async (req, res) => {
    try {
      const count = await getLiveCount(streamers);
      res.json({ count });
    } catch (err) {
      console.error(`❌ Error for ${charName}:`, err);
      res.status(500).json({ error: "Failed to fetch live count" });
    }
  });
}

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`🔥 Backend running on http://localhost:${PORT}`));
