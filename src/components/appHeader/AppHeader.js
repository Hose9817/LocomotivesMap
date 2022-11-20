import { Link, NavLink } from "react-router-dom";
import { Button, Divider } from "@mui/material";


import './appHeader.css'

const AppHeader = () => {
    return (
        <>

            <header className="app_header">

                <Link to="/">
                    {/* <span>Home</span> */}
                    <Button variant="contained" size="large">Home</Button>
                </Link>


                <nav>

                    <div><NavLink
                        // exact activeStyle={{ 'color': 'red' }} 
                        to="/">
                        <Button variant="contained">List</Button>
                    </NavLink></div>
                    <div><NavLink
                        // exact activeStyle={{ 'color': 'red' }} 
                        to="/map">
                        <Button variant="contained">Map</Button>
                    </NavLink></div>

                </nav>
            </header>
            <Divider />
        </>
    )
}

export default AppHeader;