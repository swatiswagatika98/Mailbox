
import React from 'react';
import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const loginhandler = () => {
        navigate("/login");
    }

    const signuphandler = () => {
        navigate("/signup");
    }

    return (
        <div className='container'>
            <ul className='ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>

            <div className='container_nav'>
                <ul className='ul_nav'>
                    <li>
                        <Link to="/home" style={{color:"white", textDecoration:"none"}}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{color:"white", textDecoration:"none"}}>About us</Link>
                    </li>
                    <li>
                        <Link to="/contactus" style={{color:"white", textDecoration:"none"}}>Contact us</Link>
                    </li>
                </ul>

                <div>
                    <button onClick={loginhandler}>Login</button>
                    <button onClick={signuphandler}>Signup</button>
                </div>

                <div className="cartBtn_main">
                    <button onClick={loginhandler} style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn">Login</button>
                    <button onClick={signuphandler} style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn">Signup</button>
                </div>
            </div>
        </div>
    );
}