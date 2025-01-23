export async function FetchCoins() {
  const url = "https://api.coingecko.com/api/v3/search/trending";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-fSahAv9HYXPNsRhqcRT1KJ9s",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json); // Log the API response for debugging
    return json;
  } catch (err) {
    throw new Error(`Fetch error: ${err}`);
  }
}
