"use client"

import Lottie from 'lottie-react';
import notFound from "@/public/assets/error.json";
import { usePathname } from 'next/navigation';

const MovieNotFound = () => {
    const pathname = usePathname()
    const movieId = pathname.split('/').pop();
    return (
        <div>
            <p className='text-center text-3xl'>This movie with <b className='text-red-600'>{movieId}</b> id was not found!</p>
            <Lottie animationData={notFound} loop={true} />
        </div>
    );
};

export default MovieNotFound;