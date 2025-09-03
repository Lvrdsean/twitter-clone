import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <p className={`p3-r ${"footer__text"}`}>
                <span className="footer__link">Terms of Service</span>
                <span>|</span>
                <span className="footer__link">Privacy Policy</span>
                <span>|</span>
                <span className="footer__link">Cookie Policy</span>
                <span>|</span>
                <span className="footer__link">Accessibility</span>
                <span>|</span>
                <span className="footer__link">Ads Info</span>
                <span>|</span>
                <span className="footer__link">More ...</span>
                <span>|</span>
                <span>© 2025 LVRD Corp.</span>
            </p>
        </footer>
    );
};

export default Footer;
