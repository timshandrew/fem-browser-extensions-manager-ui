import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList = "dark";
        } else {
            document.body.classList = "light";
        }
    }, [isDarkMode]);

    return (
        <header>
            <img src={logo} alt="Project logo" />
            <button
                type="button"
                className="theme-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? (
                    <img src={sunIcon} alt="Sun icon" />
                ) : (
                    <img src={moonIcon} alt="Moon icon" />
                )}
            </button>
        </header>
    );
}
