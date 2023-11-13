import React from "react";
import { FaLightbulb, FaRegMoon } from "react-icons/fa";
import axios from "axios";

import GenreButton from "./GenreButton";
import { HeaderProps, Genre } from "../interfaces/types";
import styles from "./Header.module.css";

const API_KEY = "5b7abc618fe2faf0619604f75b440c5d";
const BASE_URL = "https://api.themoviedb.org/3";


const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [genres, setGenres] = React.useState<Genre[]>([]);
    const [isGenreMenuOpen, setIsGenreMenuOpen] = React.useState(false);

    const toggleGenreMenu = () => {
        setIsGenreMenuOpen((prevOpen) => !prevOpen);
    };

    React.useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
                    params: {
                        api_key: API_KEY,
                    },
                });
                setGenres(response.data.genres);
            } catch (error) {
                console.log(error);
            }
        };

        fetchGenres();
    }, []);

    React.useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const genreButton = document.getElementById("genre-toggle-button");

            if (genreButton && !genreButton.contains(target)) {
                setIsGenreMenuOpen(false);
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${
                isDarkMode ? styles.darkMode : styles.lightMode
            }`}
        ><div>Movie</div>
            <div className={styles.center}>

                <a href="#">Movies</a>
                <GenreButton onClick={toggleGenreMenu} isGenreMenuOpen={isGenreMenuOpen} genres={genres} />
                <a href="#">Search</a>
            </div>
            <div className={styles.userSection}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYhkvL28a_Ro2jtf7-s6bU1tvuhfHCp62YA&usqp=CAU"
                    alt="User Avatar"
                    className={styles.avatar}
                />
                <span>Alex H</span>
                <button className={styles.iconButton} onClick={toggleDarkMode}>
                    {isDarkMode ? <FaRegMoon className={styles.icon} /> : <FaLightbulb className={`${styles.icon} ${styles.iconLight}`} />}
                </button>
            </div>
        </header>
    );
};

export default Header;