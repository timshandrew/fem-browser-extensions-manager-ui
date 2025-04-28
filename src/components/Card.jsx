import "./card.css";

export default function Card({ logoSrc, name, description, isActive }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={logoSrc} alt="extension logo" />
            <p>{description}</p>
            <button type="button">Remove</button>
            <label>
                <span>Extension active:</span>
                <input type="checkbox" />
            </label>
        </div>
    );
}
