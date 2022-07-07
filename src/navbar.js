import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Caleb's Epic Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/compose" style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: '8px',
                }}>New Blog</Link>
                <a href="/">...</a>
            </div>
        </nav>
    );
}
 
export default Navbar;