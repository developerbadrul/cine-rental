import MovieContainer from "@/components/MovieContainer";
import SideBar from "@/components/SideBar";;

const Homepage = ({ params: { lang } }) => {
    return (
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar  lang={lang}/>
            <MovieContainer  lang={lang}/>
        </div>
    );
};

export default Homepage;
