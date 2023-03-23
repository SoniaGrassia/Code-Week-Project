const API_KEY = "?api_key=1518eb9c4a7e088d6a62d89d1024589c";
const BASE_URL = "https://api.themoviedb.org/3/";

const SERIES_BASE_URL = "https://api.themoviedb.org/3/discover/tv";
const PARAMS_1 = "language=en-US&sort_by=popularity.desc&first_air_date.gte=";
const PARAMS_2 = "first_air_date.lte=";
const PARAMS_3 = "page=1&vote_average.gte=7&include_null_first_air_dates=false";

// Serie tv popolari tra 1970-2009:
//https://api.themoviedb.org/3/discover/tv?api_key=1518eb9c4a7e088d6a62d89d1024589c&language=en-US&sort_by=popularity.desc&first_air_date.gte=1970&first_air_date.lte=2009&page=1&vote_average.gte=7&include_null_first_air_dates=false

//Popolare la home
const GET1 = async (from, to) => {
  const res = await fetch(
    `${SERIES_BASE_URL}${API_KEY}&${PARAMS_1}${from}&${PARAMS_2}${to}&${PARAMS_3}`
  );
  const data = await res.json();
  return data;
};

//Popolare le modals
const GET2 = async (type = "tv", id) => {
  const res = await fetch(`${BASE_URL}${type}/${id}${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET1, GET2 };
