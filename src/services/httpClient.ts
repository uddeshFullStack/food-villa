const DEFAULT_HEADERS: HeadersInit = {
  Accept: "application/json",
};

export async function fetchJson(
  url: string,
  options: RequestInit = {}
): Promise<Response | null> {
  const response = await fetch(url, {
    ...options,
    headers: { ...DEFAULT_HEADERS, ...options.headers },
  });

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
