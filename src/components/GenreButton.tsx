import React from "react";
import { HeaderProps, Genre } from "../interfaces/types";
import styles from "./Header.module.css";

type GenreButtonProps = {
    onClick: () => void;
    isGenreMenuOpen: boolean;
    genres: Genre[];
};

const GenreButton: React.FC<GenreButtonProps> = ({ onClick, isGenreMenuOpen, genres }) => {
    return (
        <div className={styles.genreButton} onClick={onClick} id="genre-toggle-button">
            <button>Genres</button>
            {isGenreMenuOpen && (
                <div className={styles.dropdown}>
                    {genres.map((genre) => (
                        <div key={genre.id}>{genre.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GenreButton;