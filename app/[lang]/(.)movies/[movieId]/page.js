import Modal from "@/components/Modal";
import ModalMovieDetails from "@/components/ModalMovieDetails";
// import MovieDetails from "@/components/MovieDetails";

const MovieModal = ({ params: { movieId, lang } }) => {
    return (
        <Modal>
            {/* <MovieDetails  />  */}
            <ModalMovieDetails id={movieId} lang={lang}/>
        </Modal>
    );
};

export default MovieModal;