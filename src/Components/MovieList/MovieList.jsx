import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_MOVIELIST_KEY

import FilterDropdown from "../FilterDropdown/FilterDropdown";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
                const data = await res.json();
                setMovies(data.results);
            } catch(error) {
                console.log(error)
            }
        }
        fetchMovies()
    }, []);

    return (
        <div className="MovieList">
            <FilterDropdown />
            <ul>
                <MovieCard movies={movies} />
            </ul>
        </div>
    )
}

export default MovieList;