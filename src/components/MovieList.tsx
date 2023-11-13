import React from "react";
import axios from "axios";
import Movie from "./Movie";
import styles from "./Style/MovieList.module.css";
import { Movie as MovieType } from "../interfaces/types";

const API_KEY = "5b7abc618fe2faf0619604f75b440c5d";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieList: React.FC = () => {
    const [movies, setMovies] = React.useState<MovieType[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/popular`, {
                    params: {
                        api_key: API_KEY,
                        page: currentPage,
                    },
                });
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div className={styles.movieList}>
            <div className={styles.movieGrid}>
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
            <div className={styles.pagination}>
                <button
                    className={styles.paginationButton}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous page
                </button>
                <button
                    className={styles.paginationButton}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next page
                </button>
            </div>
        </div>
    );
};

export default MovieList;