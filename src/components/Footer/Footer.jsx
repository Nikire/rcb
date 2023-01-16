import React from 'react';
import './Footer.modules.css';

const Footer = ({ type = 1 }) => {
    const footer = () => {
        switch (type) {
            case 1: return <Footer1 />
            default: return <Footer1 />
        }
    }
    return (
        footer()
    )
}

const Footer1 = () => {
    return (
        <footer>
            Footer
        </footer>
    )
}

export default Footer;