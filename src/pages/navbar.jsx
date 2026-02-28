import { Link, useNavigate } from "react-router-dom";
import './style/navbar_style.css';

export function Navbar(){
    const navigate = useNavigate();

    const handleChange = (e) => {
        const path = e.target.value;
        if (path) navigate(path);
    };

    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/world-total-population">Total Population</Link>
            </div>

            <div className="navbar-select">
                <select onChange={handleChange}>
                    <option value="">Select by →</option>
                    <option value="/countries/region">Region</option>
                    <option value="/countries/currency">Currency</option>
                    <option value="/countries/population">Population</option>
                </select> 
            </div>
        </div>
    );
}