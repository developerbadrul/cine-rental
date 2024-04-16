import MovieDetails from "@/components/MovieDetails";
import { getMovies } from "@/lib/getMovieData";
import { notFound } from "next/navigation";

const MovieDetailsPage = async ({ params: { movieId, lang } }) => {
    
    return (
        <MovieDetails id={movieId} lang={lang} />
    );
};

export default MovieDetailsPage;