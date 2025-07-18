import Button from "../../components/button/Button";
import "./LoginScreen.scss";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";

const Login = () => {
    return (
        <div className="login__screen">
            <div className="login__content">
                <img src={Logo} className="login__logo" alt="logo" />
                <h1 className="login__account">Create an account</h1>
                <Button onClick={() => {}} className="login__button">
                    <img
                        src={Google}
                        className="login__logo--apple_google"
                        alt="google"
                    />
                    Sign up with Google
                </Button>
                <Button onClick={() => {}} className="login__button">
                    <img
                        src={Apple}
                        className="login__logo--apple_google"
                        alt="apple"
                    />
                    Sign up with Apple
                </Button>
                <div className="login__divider">
                    <p>OR</p>
                </div>
                <Button onClick={() => {}} className="login__button--blue">
                    Create account
                </Button>
                <p className={`p3-r ${"login__terms"}`}>
                    By signing up, you agree to absolutely{" "}
                    <span className="login__terms--blue">nothing</span>
                    because this is a{" "}
                    <span className="login__terms--blue">clone.</span>
                </p>
                <p className={`p1-b ${"login__account--own"}`}>
                    Already have an account?
                </p>
                <Button onClick={() => {}} className="login__button--blue_text">
                    Sign in
                </Button>
            </div>
            <footer>
                <p className={`p3-r ${"login__footer_text"}`}>
                    <span>About</span> <span>|</span>
                    <span>Get the X app</span>
                    <span>|</span>
                    <span>Get the Grok app</span>
                    <span>|</span>
                    <span>Careers</span> <span>|</span>
                    <span>Terms of Service</span>
                    <span>|</span>
                    <span>Privacy Policy</span>
                    <span>|</span>
                    <span>Cookie Policy</span> <span>|</span>
                    <span>Developers</span>
                    <span>|</span>
                    <span>Advertising</span>
                    <span>|</span>
                    <span>Settings</span>
                    <span>|</span>
                    <span>© 2025 LVRD Corp.</span>
                </p>
            </footer>
        </div>
    );
};

export default Login;
