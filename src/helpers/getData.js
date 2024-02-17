import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async endpoint => {
  try {
    const res = await axios.get(endpoint, options);

    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir sorun oluştu", err);
  }
};
