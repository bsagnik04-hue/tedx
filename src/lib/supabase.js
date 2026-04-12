import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const missingSupabaseEnv = [
  !supabaseUrl ? "VITE_SUPABASE_URL" : null,
  !supabaseKey ? "VITE_SUPABASE_ANON_KEY" : null,
].filter(Boolean);

if (missingSupabaseEnv.length) {
  console.error("[supabase] Missing frontend env vars:", missingSupabaseEnv);
}

export function hasSupabaseConfig() {
  return Boolean(supabaseUrl && supabaseKey);
}

export function getMissingSupabaseEnv() {
  return missingSupabaseEnv;
}

export const supabase = hasSupabaseConfig()
  ? createClient(supabaseUrl, supabaseKey)
  : null;
