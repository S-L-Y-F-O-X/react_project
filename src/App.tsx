import React from "react";
import Header from "./components/Header";
// Импортируйте необходимые типы
import { AppProps, HeaderProps } from "./interfaces/types";
import MovieList from "./components/MovieList";

const App: React.FC<AppProps> = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <MovieList />
        </div>
    );
};

export default App;