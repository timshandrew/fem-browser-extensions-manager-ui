import Card from "./Card";
import extensionData from "../assets/data.json";
import "./extensionGrid.css";
import { useState } from "react";

export default function ExtensionGrid({ filterOption }) {
    const [extensions, setExtensions] = useState(
        extensionData.reduce((acc, item) => {
            acc[item.name] = item;
            return acc;
        }, {})
    );

    function toggleExtension(name) {
        setExtensions({
            ...extensions,
            [name]: {
                ...extensions[name],
                isActive: !extensions[name].isActive,
            },
        });
    }

    function isIncluded(extension) {
        switch (filterOption) {
            case "all":
                return true;
            case "active":
                return extension.isActive;
            case "inactive":
                return !extension.isActive;
        }
    }

    return (
        <div className="extensionGrid">
            {Object.values(extensions)
                .filter(isIncluded)
                .map((extension) => {
                    return (
                        <Card
                            key={extension.name}
                            logoSrc={extension.logo}
                            name={extension.name}
                            description={extension.description}
                            isActive={extension.isActive}
                            toggleExtension={() =>
                                toggleExtension(extension.name)
                            }
                        />
                    );
                })}
        </div>
    );
}
