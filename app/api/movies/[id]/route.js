import movies from "@/app/api/movies";

export async function GET(_request, { params }) {
    const movieId = params.id;

    // console.log(movieId);

    const movie = movies.find(
        (movie) => movie.id === parseInt(movieId)
    );

    // console.log(movie);

    if (!movie) {
        return new Response('Movie not found', { status: 404 });
    }

    return new Response(JSON.stringify(movie), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = params.id;

    const movieIndex = movies.findIndex(movie => movie.id === parseInt(movieId));

    if (movieIndex === -1) {
        return new Response('Movie not found', { status: 404 });
    }

    movies[movieIndex] = { ...movies[movieIndex], ...movie };

    return new Response(JSON.stringify(movies[movieIndex]), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function DELETE(_request, { params }) {
    const movieId = params.id;

    const movieIndex = movies.findIndex(movie => movie.id === parseInt(movieId));

    if (movieIndex === -1) {
        return new Response('Movie not found', { status: 404 });
    }

    const deletedMovie = movies.splice(movieIndex, 1)[0];

    return new Response(JSON.stringify(deletedMovie), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}