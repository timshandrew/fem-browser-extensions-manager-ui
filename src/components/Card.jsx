import "./card.css";

export default function Card({ cardInfo }) {
    const { logo, name, description, isActive } = cardInfo;

    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={logo} />
            <p>{description}</p>
            <button>Remove</button>
            <label>
                <span>Extension active:</span>
                <input type="checkbox" />
            </label>
        </div>
    );
}
