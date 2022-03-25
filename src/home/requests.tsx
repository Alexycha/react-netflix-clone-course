import React from 'react';

// const APIKEY = "beee775200fa27d243272c30e0443dc5";
const API_KEY = process.env.REACT_APP_API_KEY 

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=123`,
    fetchNews: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=123`,
    fetchPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchRevenue: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=revenue.desc`,
    fetchFrance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR`,

}

export default requests;