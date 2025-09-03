import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <p className={`p3-r ${"home__footer_text"}`}>
                <span className="home__footer_link">Terms of Service</span>
                <span>|</span>
                <span className="home__footer_link">Privacy Policy</span>
                <span>|</span>
                <span className="home__footer_link">Cookie Policy</span>
                <span>|</span>
                <span className="home__footer_link">Accessibility</span>
                <span>|</span>
                <span className="home__footer_link">Ads Info</span>
                <span>|</span>
                <span className="home__footer_link">More ...</span>
                <span>|</span>
                <span>© 2025 LVRD Corp.</span>
            </p>
        </footer>
    );
};

export default Footer;
