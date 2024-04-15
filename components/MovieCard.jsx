import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";

const MovieCard = async({ movie, lang }) => {
    const dictionary = await getDictionary(lang)
    // console.log(dictionary);
    // console.log(movie);
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image className="w-full object-cover" src={movie?.poster_path} width={356} height={428} alt="" />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie?.original_title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">Genre ids: {movie.genre_ids.join(", ")}</p>
                <div className="flex items-center space-x-1 mb-5">
                    {[...Array(Math.round(movie.vote_average / 2))].map((_, index) => (
                        <Image key={index} src="/assets/star.svg" width={14} height={14} alt="" />
                    ))}
                </div>
                <Link href={`${lang}/movies/${movie.id}`} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
                    <Image src="/assets/tag.svg" width={20} height={20} alt="" />
                    <span>{dictionary.details}</span>
                </Link>
            </figcaption>
        </figure>
    );
};

export default MovieCard;
