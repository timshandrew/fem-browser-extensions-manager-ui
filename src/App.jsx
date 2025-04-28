import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <>
            <Card
                cardInfo={{
                    logo: "./images/logo-style-spy.svg",
                    name: "Card Name",
                    description: "This is a card description.",
                    isActive: true,
                }}
            />
        </>
    );
}

export default App;
