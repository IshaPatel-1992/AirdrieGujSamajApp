const isProd = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProd
  ? "https://airdriegujsamajapp.onrender.com" // temporary production URL
  : "http://localhost:5000";

export async function apiGet(path) {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("API GET ERROR:", err);
    return null;
  }
}
