import MovieCard from "./MovieCard";
import movieData from "@/movieData.json"
const MovieContainer = () => {
    // console.log(movieData);
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movieData?.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default MovieContainer;
