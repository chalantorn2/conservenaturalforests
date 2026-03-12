// Netlify serverless function – proxies Instagram Graph API
// Set INSTAGRAM_TOKEN in Netlify environment variables (Site settings > Environment variables)
//
// How to get a token:
// 1. Create a Facebook App at https://developers.facebook.com/
// 2. Add "Instagram Basic Display" or "Instagram" product
// 3. Generate a User Token for the Instagram account
// 4. Exchange for a long-lived token (valid 60 days)
// 5. Save as INSTAGRAM_TOKEN in Netlify env vars
// 6. Refresh before it expires via:
//    GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TOKEN

const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const LIMIT = 8;

export default async (req) => {
  const token = process.env.INSTAGRAM_TOKEN;

  if (!token) {
    return new Response(JSON.stringify({ error: "INSTAGRAM_TOKEN not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=${LIMIT}&access_token=${token}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data.data || []), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=900, max-age=300",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch Instagram feed" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = { path: "/api/instagram" };
