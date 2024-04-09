import "server-only"

const movies = {
    myMovies :   () => import("@/movieData.json").then(module => module.default)
}

export  const getMovies = async () => movies.myMovies()