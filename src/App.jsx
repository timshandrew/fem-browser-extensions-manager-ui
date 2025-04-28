import "./App.css";
import Card from "./components/Card";
import logo from "./assets/images/logo.svg";
import sunIcon from "./assets/images/icon-sun.svg";
import moonIcon from "./assets/images/icon-moon.svg";

function App() {
    return (
        <>
            <header>
                <img src={logo} alt="Project logo" />
                <button type="button" className="theme-toggle">
                    <img src={sunIcon} alt="Sun icon" className="sun-icon" />
                </button>
            </header>

            <main>
                <div className="extension-select-header">
                    <h2>Extensions List</h2>
                    <div className="filter-options">
                        <label>
                            All
                            <input type="radio" name="filter" value="all" />
                        </label>

                        <label>
                            Active
                            <input type="radio" name="filter" value="active" />
                        </label>

                        <label>
                            Inactive
                            <input
                                type="radio"
                                name="filter"
                                value="inactive"
                            />
                        </label>
                    </div>
                </div>
                <Card
                    logoSrc="./images/logo-style-spy.svg"
                    name="Card name"
                    description="This is a card description."
                    isActive={true}
                />
            </main>
        </>
    );
}

export default App;
