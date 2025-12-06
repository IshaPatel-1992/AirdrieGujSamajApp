// src/config.js

const isProduction = process.env.NODE_ENV === "production";

export const API_BASE_URL = isProduction
  ? process.env.REACT_APP_API_URL        // Production API from .env
  : "http://localhost:5000";             // Dev API for local use
