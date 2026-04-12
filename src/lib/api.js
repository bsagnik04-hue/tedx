const apiBaseUrl = import.meta.env.VITE_ADMIN_API_BASE_URL || "";

if (import.meta.env.DEV && !apiBaseUrl) {
  console.error(
    "[api] Missing VITE_ADMIN_API_BASE_URL in local development. Vite alone will not serve /api routes.",
  );
}

async function parseApiResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong.");
  }

  return data;
}

export async function createOrder(payload) {
  try {
    const response = await fetch(`${apiBaseUrl}/api/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return parseApiResponse(response);
  } catch (error) {
    console.error("[api] create-order request failed:", error);
    throw new Error("Could not reach the payment server. Check VITE_ADMIN_API_BASE_URL and try again.");
  }
}

export async function verifyPayment(payload) {
  try {
    const response = await fetch(`${apiBaseUrl}/api/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return parseApiResponse(response);
  } catch (error) {
    console.error("[api] verify-payment request failed:", error);
    throw new Error("Could not verify payment right now. Please try again.");
  }
}

export async function confirmManualPayment(payload) {
  try {
    const response = await fetch(`${apiBaseUrl}/api/manual-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return parseApiResponse(response);
  } catch (error) {
    console.error("[api] manual-payment request failed:", error);
    throw new Error("Could not confirm the QR payment right now. Please try again.");
  }
}

export async function fetchAdminRegistrations(password) {
  try {
    const response = await fetch(`${apiBaseUrl}/api/admin-registrations`, {
      method: "GET",
      headers: {
        "x-admin-password": password,
      },
    });

    return parseApiResponse(response);
  } catch (error) {
    console.error("[api] admin-registrations request failed:", error);
    throw new Error("Could not load registrations right now.");
  }
}
