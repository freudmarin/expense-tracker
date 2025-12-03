// API base URL config
const LOCAL_API = 'http://localhost:8080';
const PROD_API = 'https://expense-tracker-be-tocc.onrender.com';

// Allow override via env variable (Vite/CRA compatible)
// Allow override via env variable (Vite compatible)
const ENV_API = import.meta.env.VITE_API_BASE_URL;

export const API_BASE_URL =
  ENV_API || (import.meta.env.MODE === 'production' ? PROD_API : LOCAL_API);
