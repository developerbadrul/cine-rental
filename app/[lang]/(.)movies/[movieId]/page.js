import Modal from "@/components/Modal";
import ModalMovieDetails from "@/components/ModalMovieDetails";

const MovieModal = ({ params: { movieId, lang } }) => {
    return (
        <Modal>
            <ModalMovieDetails id={movieId} lang={lang}/>
        </Modal>
    );
};

export default MovieModal;