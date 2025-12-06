// src/api.js
import { API_BASE_URL } from "./config";

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) {
      const message = await res.text();
      throw new Error(`API Error ${res.status}: ${message}`);
    }

    // Auto detect JSON vs empty response
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return text; // non-JSON responses
    }

  } catch (err) {
    console.error("❌ API Request Failed:", err);
    throw err;
  }
}

// Export helpers
export const api = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, body) =>
    request(endpoint, { method: "POST", body: JSON.stringify(body) }),
  put: (endpoint, body) =>
    request(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  del: (endpoint) =>
    request(endpoint, { method: "DELETE" }),
};
