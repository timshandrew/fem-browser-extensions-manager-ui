import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <>
            <Card
                logoSrc="./images/logo-style-spy.svg"
                name="Card name"
                description="This is a card description."
                isActive={true}
            />
        </>
    );
}

export default App;
