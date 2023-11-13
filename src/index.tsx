import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProps } from "./interfaces/types";

const initialDarkMode = true;

const toggleDarkMode = () => {
    // Логика для переключения dark mode
};

const renderApp = (isDarkMode: boolean) => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
            <App isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        );
    }
};

renderApp(initialDarkMode);