import { Link, NavLink } from "react-router-dom";

import './appHeader.css'

const AppHeader = () => {
    return (
        <header className="app_header">
            <h4>
                <Link to="/">
                    <span>Home</span>
                </Link>
            </h4>

            <nav>
                <ul>
                    <li><NavLink exact activeStyle={{ 'color': 'red' }} to="/">List</NavLink></li>
                    <li><NavLink exact activeStyle={{ 'color': 'red' }} to="/map">Map</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}

export default AppHeader;