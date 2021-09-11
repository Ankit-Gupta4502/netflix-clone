const API_KEY = 'b446989950f59feffb9d1867bccc84d0'
 export const base_url = 'https://image.tmdb.org/t/p/original'

 export const ApiEndpoints = {
  fetchTrending:  `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
}
// https://api.themoviedb.org/3/discover/movie?ap_key=b446989950f59feffb9d1867bccc84d0&with_genres=35