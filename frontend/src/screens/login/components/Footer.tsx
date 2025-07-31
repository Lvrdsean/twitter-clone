import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <p className={`p3-r ${"footer__text"}`}>
                <span className="footer__link">About</span>
                <span>|</span>
                <span className="footer__link">Get the X app</span>
                <span>|</span>
                <span className="footer__link">Get the Grok app</span>
                <span>|</span>
                <span className="footer__link">Careers</span>
                <span>|</span>
                <span className="footer__link">Terms of Service</span>
                <span>|</span>
                <span className="footer__link">Privacy Policy</span>
                <span>|</span>
                <span className="footer__link">Cookie Policy</span>
                <span>|</span>
                <span className="footer__link">Developers</span>
                <span>|</span>
                <span className="footer__link">Advertising</span>
                <span>|</span>
                <span className="footer__link">Settings</span>
                <span>|</span>
                <span>© 2025 LVRD Corp.</span>
            </p>
        </footer>
    );
};

export default Footer;
