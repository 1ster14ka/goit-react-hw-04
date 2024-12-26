import axios from "axios";

const API_KEY = "3BWtJcI7eBtJex-ODxYLWGZ3WTdAlJGuTrtg7RK0FLo";

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`,
    {
      params: {
        query,
        page,
      },
    }
  );
  return data;
};
