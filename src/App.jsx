import "./App.css";
import logo from "./assets/images/logo.svg";
import sunIcon from "./assets/images/icon-sun.svg";
import moonIcon from "./assets/images/icon-moon.svg";
import FilterOptions from "./components/FilterOptions";
import { useState } from "react";
import ExtensionGrid from "./components/ExtensionGrid";

function App() {
    const [filterOption, setFilterOption] = useState("all");

    return (
        <div className="layout-wrapper">
            <header>
                <img src={logo} alt="Project logo" />
                <button type="button" className="theme-toggle">
                    <img src={moonIcon} alt="Moon icon" className="moon-icon" />
                </button>
            </header>

            <main>
                <div className="extension-select-header">
                    <h2>Extensions List</h2>
                    <FilterOptions setFilterOption={setFilterOption} />
                </div>
                <ExtensionGrid filterOption={filterOption} />
            </main>
        </div>
    );
}

export default App;
