import "./App.css";

import FilterOptions from "./components/FilterOptions";
import { useState } from "react";
import ExtensionGrid from "./components/ExtensionGrid";
import Header from "./components/Header";

function App() {
    const [filterOption, setFilterOption] = useState("all");

    return (
        <div className="layout-wrapper">
            <Header />

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
