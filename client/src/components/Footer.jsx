import React from "react";
import Logo from "../img/logo.png";



const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="LogoSite" />
            <span className="textFooter">Rudy TOUITOU - 2023.</span>
        </footer>
    )
};

export default Footer;