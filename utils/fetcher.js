const getQueryString = (params) => {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
};

export const fetcher = async (url = "", query = {}, ...rest) => {
  const qs = getQueryString(query);
  const path = url ? `${url}${qs ? `&${qs}` : ""}` : "";
  const response = await fetch(path, ...rest);

  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    const responseBody = await response.json();
    return responseBody;
  }
};
