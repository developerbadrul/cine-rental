import { getMovies } from "@/lib/getMovieData";
import MovieCard from "./MovieCard";
const MovieContainer = async () => {
    const movies = await getMovies()
    // console.log(movies);
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default MovieContainer;
