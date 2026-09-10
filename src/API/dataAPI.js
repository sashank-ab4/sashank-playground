const BASE_URL = "https://dummyjson.com/";

const fetchDataAPI = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error("Failed to retrieve data!");
  return res.json();
};

export const getUserDetails = () => {
  return fetchDataAPI("/users");
};

export const getQuotes = () => {
  return fetchDataAPI("/quotes");
};
