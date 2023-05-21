import { NavLink } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import "./MovieCard.css"

const MovieCard = (props) => {
    const  { movies } = props;
    const url = "https://image.tmdb.org/t/p/w500/"

    return (
        movies.map((movie) => (
            <li key={movie.id} className={"MovieCard--li"}>
                <NavLink to={"/" + movie.id}>
                    <img src={url + movie.poster_path}/>
                </NavLink>
                <MarkAsSeenBtn />
            </li>
            
    )));
}

export default MovieCard;