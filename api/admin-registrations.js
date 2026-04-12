import { getEnv, handleMethod, sendJson } from "./_lib/config.js";
import { getSupabaseAdmin } from "./_lib/supabaseAdmin.js";

export default async function handler(request, response) {
  if (!handleMethod(request, response, "GET")) {
    return;
  }

  const adminPassword = request.headers["x-admin-password"];
  if (!adminPassword || adminPassword !== getEnv("ADMIN_PASSWORD")) {
    return sendJson(response, 401, { error: "Unauthorized." });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return sendJson(response, 500, { error: error.message });
    }

    return sendJson(response, 200, { registrations: data });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "Unable to load registrations." });
  }
}
