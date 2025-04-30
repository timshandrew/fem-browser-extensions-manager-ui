import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            for (const styleName in darkThemeStyles) {
                document.body.style.setProperty(
                    `--${styleName}`,
                    darkThemeStyles[styleName]
                );
            }
        } else {
            for (const styleName in lightThemeStyles) {
                document.body.style.setProperty(
                    `--${styleName}`,
                    lightThemeStyles[styleName]
                );
            }
        }
    }, [isDarkMode]);

    const lightThemeStyles = {
        bgGradient: "linear-gradient(#EBF2FC, #EEFBF9)",
        layer1Color: "white",
        layer2Color: "#EEEEEE",
        textColor: "#535868",
        accentTextColor: "#091540",
    };

    const darkThemeStyles = {
        bgGradient: "linear-gradient(#04091B , #091540)",
        layer1Color: "#535868",
        layer2Color: "#2F364B",
        textColor: "#C6C6C6",
        accentTextColor: "white",
    };

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
