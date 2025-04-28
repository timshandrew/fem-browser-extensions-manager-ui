import "./filterOptions.css";

export default function FilterOptions({ setFilterOption }) {
    return (
        <div className="filter-options">
            <label onClick={() => setFilterOption("all")}>
                All
                <input type="radio" name="filter" value="all" defaultChecked />
            </label>

            <label onClick={() => setFilterOption("active")}>
                Active
                <input type="radio" name="filter" value="active" />
            </label>

            <label onClick={() => setFilterOption("inactive")}>
                Inactive
                <input type="radio" name="filter" value="inactive" />
            </label>
        </div>
    );
}
