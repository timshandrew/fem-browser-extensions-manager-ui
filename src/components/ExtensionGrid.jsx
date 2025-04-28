import Card from "./Card";
import extensionData from "../assets/data.json";
import "./extensionGrid.css";

export default function ExtensionGrid({ filterOption }) {
    return (
        <div className="extensionGrid">
            {extensionData.map((extension) => {
                return (
                    <Card
                        key={extension.name}
                        logoSrc={extension.logo}
                        name={extension.name}
                        description={extension.description}
                        isActive={extension.isActive}
                    />
                );
            })}
        </div>
    );
}
