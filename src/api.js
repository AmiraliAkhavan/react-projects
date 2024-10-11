import axios from "axios";

async function searchImages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID DGBy-u5fDu9F88wHyci_5JUlr96cIiCZh_o0yZyfMbw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
}

export default searchImages;
