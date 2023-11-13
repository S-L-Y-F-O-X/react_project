import React from "react";
import styles from "./Style/Movie.module.css";
import { Movie as MovieType} from "../interfaces/types";

interface Props {
    movie: MovieType;
}

const Movie: React.FC<Props> = ({ movie }) => {
    const [rating, setRating] = React.useState(0);
    const maxRating = 10;

    React.useEffect(() => {
        setRating(Math.round(movie.vote_average / 2));
    }, [movie]);

    return (
        <div className={styles.movie}>
            <img
                className={styles.moviePoster}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <div className={styles.starRating}>
                {Array.from(Array(maxRating).keys()).map((index) => (
                    <span
                        key={index}
                        className={`${styles.star} ${
                            index < rating ? styles.filled : styles.empty
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Movie;