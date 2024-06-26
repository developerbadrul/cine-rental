import { getMovies } from "@/lib/getMovieData";
import SideBar from "./SideBar";
import Image from "next/image"
import { getDictionary } from "@/app/[lang]/dictionaries";

const ModalMovieDetails = async ({ id, lang }) => {
    const movies = await getMovies()
    const dictionary = await getDictionary(lang)
    const movie = movies?.find(movie => movie.id === parseInt(id));
    return (
        <div className="container w-10/12">
            <section>
                <div>
                    <Image className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                        src={movie.backdrop_path} height={500} width={500} alt="" />
                </div>

                <div className="grid grid-cols-12 py-12 gap-8">
                    <div className="col-span-2">
                        <Image src={movie.poster_path} width={300} height={300} alt="" />
                    </div>
                    <div className="col-span-8">
                        <h2 className="font-bold text-slate-300 text-2xl">{movie.original_title}</h2>
                        <p className="my-2 text-slate-400 italic">{movie.overview}</p>
                        <ul className="text-slate-300 space-y-2 my-8">
                            <li>{dictionary.releaseDate} : {movie.release_date}</li>
                            <li>{dictionary.averageVote} : {movie.vote_average.toFixed(1)}</li>
                            <li>{dictionary.voteCount} : {movie.vote_count}</li>
                            <li>{dictionary.popularity} : {movie.popularity}</li>
                        </ul>

                    </div>
                    <div className="col-span-2 space-y-4">
                        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                            {dictionary.streamInHD}
                        </button>
                        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                            {dictionary.downloadInHD}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModalMovieDetails;