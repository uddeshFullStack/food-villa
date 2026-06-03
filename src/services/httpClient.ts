import { auth } from "./auth/firebase";

const DEFAULT_HEADERS: HeadersInit = {
  Accept: "application/json",
};

/** Returns the current user's Firebase ID token, or null if not signed in. */
async function getIdToken(): Promise<string | null> {
  if (!auth || !auth.currentUser) return null;
  try {
    return await auth.currentUser.getIdToken();
  } catch {
    return null;
  }
}

/** Builds headers, injecting the Bearer token when the user is signed in. */
async function buildHeaders(extra: HeadersInit = {}): Promise<HeadersInit> {
  const token = await getIdToken();
  return {
    ...DEFAULT_HEADERS,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extra,
  };
}

export async function fetchJson(
  url: string,
  options: RequestInit = {}
): Promise<Response | null> {
  const headers = await buildHeaders(options.headers as HeadersInit);
  const response = await fetch(url, { ...options, headers });

  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok || !contentType.includes("application/json")) {
    return null;
  }

  return response;
}

export async function fetchFirstAvailable(urls: string[]): Promise<Response> {
  for (const url of urls) {
    try {
      const response = await fetchJson(url);
      if (response) return response;
    } catch {
      /* try next URL */
    }
  }

  throw new Error("Unable to load data from API");
}
