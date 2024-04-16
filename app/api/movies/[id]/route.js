import movies from "@/app/api/movies";

export async function GET(_request, { params }) {
    const movieId = params.id;

    console.log(movieId);

    const movie = movies.find(
        (movie) => movie.id === parseInt(movieId)
    );

    console.log(movie);

    if (!movie) {
        return new Response('Movie not found', { status: 404 });
    }

    return new Response(JSON.stringify(movie), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
