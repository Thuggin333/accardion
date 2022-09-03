import axios from "axios";

export default async function request(url, searchWord, length) {
  // const axios = require("axios");

  const options = {
    method: "GET",
    url,
    params: { q: searchWord, page_size: length },
    headers: {
      "X-RapidAPI-Key": "16b4852e14msh946f5abb4a76cdfp1b1978jsnfbf7a4dbd6ac",
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error);
    });
}
