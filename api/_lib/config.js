export function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function sendJson(response, statusCode, body) {
  response.status(statusCode).json(body);
}

export function handleMethod(request, response, allowedMethod) {
  if (request.method !== allowedMethod) {
    sendJson(response, 405, { error: "Method not allowed." });
    return false;
  }

  return true;
}
