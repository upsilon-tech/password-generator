import { Icon } from "@iconify/react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-style">
            <div className="footer-icons">
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:github" />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:linkedin" />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:twitter" />
                </a>
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:facebook" />
                </a>
            </div>
            <p className="footer-text">Developed by <span className="font-bold">Khireddine TIDJET</span></p>
        </footer>
    );
}

export default Footer;
