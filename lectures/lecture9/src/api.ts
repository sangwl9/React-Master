const API_KEY = "009053f3a8257666a8c22cdce3c3c5ff";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json(),
    );
}
