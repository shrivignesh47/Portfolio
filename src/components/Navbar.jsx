import React, { useState } from 'react';
import './css/Navbar.css';
import 'react-bootstrap';
import Resume from './Assets/Skills/ShriVignesh_S_Resume.pdf';
import { MDBNavbar, MDBBtn } from 'mdb-react-ui-kit';

const Navbar = () => {
    const [isWhiteTheme, setIsWhiteTheme] = useState(true);

    const toggleTheme = () => {
        setIsWhiteTheme(!isWhiteTheme);
        document.body.style.backgroundColor = isWhiteTheme ? '#D3D3D3' : '#202d3e';
    };
    
    return (
        <MDBNavbar fixed='top' className='nav-container_'>
            <nav
                className='navbar1'
                style={{
                    backgroundColor: isWhiteTheme ? '#152238' : '#152238',
                    boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(25px)',
                    borderRadius: '3vh',
                }}
            >
                <div className='navbar-brand1' style={{ color: isWhiteTheme ? 'white' : 'white' }}>
                    Shri Vignesh
                </div>
                <ul className='navbar-nav1'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#notset'>About</a>
                    </li>
                    <li>
                        <a href='#notset'>Projects</a>
                    </li>
                    <li>
                        <a href='#notset'>Contact</a>
                    </li>
                </ul>
                <div className='navbar-actions'>
                    <MDBBtn outline color='white' href={Resume} download className='nav-btn1'>
                        <span role="img" aria-label="download">⬇️</span> Resume
                    </MDBBtn>
                    <MDBBtn outline color='white' onClick={toggleTheme} className='nav-btn2'>
                        <span role="img" aria-label="bulb">💡</span>
                    </MDBBtn>
                </div>
            </nav>
        </MDBNavbar>
    );
};

export default Navbar;

document.body.style.backgroundColor = '#202d3e';
