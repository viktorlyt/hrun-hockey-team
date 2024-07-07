export const isNetlify = import.meta.env.NETLIFY === "true";

export const getApiUrl = () => {
  if (isNetlify) {
    return "/.netlify/functions";
  }
  return import.meta.env.VITE_API_URL || "http://localhost:5101";
};

export const useMockData = isNetlify;
