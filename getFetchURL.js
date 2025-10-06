export function getFetchURL({ apiEndPoint = "/api", params = null } = {}) {
  const url = new URL(apiEndPoint, window.location.origin);

  if (params) {
    url.searchParams.set(params[0], params[1]);

    if (params.length > 3) {
      for (let i = 2; i < params.length - 1; i += 2) {
        url.searchParams.append(params[i], params[i + 1]);
      }
      return url;
    }
  }
  return url;
}
