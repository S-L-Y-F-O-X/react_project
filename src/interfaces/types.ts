export interface Genre {
    id: number;
    name: string;
}

export interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
export interface AppProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
}

export interface MovieProps {
    movie: Movie;
}