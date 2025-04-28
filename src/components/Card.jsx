import "./card.css";

export default function Card({
    logoSrc,
    name,
    description,
    isActive,
    toggleExtension,
}) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={logoSrc} alt="extension logo" />
            <p>{description}</p>
            <button type="button">Remove</button>
            <label onClick={toggleExtension}>
                <span>Extension active:</span>
                <input type="checkbox" checked={isActive} />
            </label>
        </div>
    );
}
