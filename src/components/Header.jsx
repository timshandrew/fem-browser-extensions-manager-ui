import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Project logo" />
            <button type="button" className="theme-toggle">
                <img src={moonIcon} alt="Moon icon" className="moon-icon" />
            </button>
        </header>
    );
}
