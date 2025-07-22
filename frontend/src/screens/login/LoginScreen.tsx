import Button from "../../components/button/Button";
import "./LoginScreen.scss";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import Input from "../../components/input/Input";

const Login = () => {
    // state
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false);
    const [identifier, setIdentifier] = useState("");

    return (
        <div className="login__screen">
            <div className="login__content">
                <img src={Logo} className="login__logo" alt="logo" />
                <h2 className="login__account">Create an account</h2>
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
                <Button
                    onClick={() => setCreateModalOpen(true)}
                    className="login__button--blue"
                >
                    Create account
                </Button>
                <p className={`p3-r ${"login__terms"}`}>
                    By signing up, you agree to absolutely
                    <span className="login__terms--blue">nothing</span>
                    because this is a
                    <span className="login__terms--blue">clone.</span>
                </p>
                <p className={`p1-b ${"login__account--own"}`}>
                    Already have an account?
                </p>
                <Button
                    onClick={() => setSignInModalOpen(true)}
                    className="login__button--blue_text"
                >
                    Sign in
                </Button>
                <Modal
                    isOpen={isCreateModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                >
                    <img src={Logo} className="login__logo--modal" alt="logo" />
                    <h1>Create your account</h1>
                    <p>This is where you create your account.</p>
                </Modal>

                <Modal
                    isOpen={isSignInModalOpen}
                    onClose={() => setSignInModalOpen(false)}
                    className="login__signin"
                >
                    <img src={Logo} className="login__logo--modal" alt="logo" />
                    <h1>Sign in to X</h1>
                    <Button onClick={() => {}} className="login__button--modal">
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
                    <Input
                        placeholder="Phone, email, or username"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                    />
                    <Button
                        onClick={() => {}}
                        className={`p1-b ${"login__button--next"}`}
                    >
                        Next
                    </Button>
                    <Button
                        onClick={() => {}}
                        className={`p1-b ${"login__button--forgot_password"}`}
                    >
                        Forgot password?
                    </Button>
                    <p className={`p1-r ${"login__terms--no_account"}`}>
                        Don't have an account?
                        <span className="login__linkish--blue">Sign up</span>
                    </p>
                </Modal>
            </div>
            <footer>
                <p className={`p3-r ${"login__footer_text"}`}>
                    <span className="login__linkish">About</span>
                    <span>|</span>
                    <span className="login__linkish">Get the X app</span>
                    <span>|</span>
                    <span className="login__linkish">Get the Grok app</span>
                    <span>|</span>
                    <span className="login__linkish">Careers</span>
                    <span>|</span>
                    <span className="login__linkish">Terms of Service</span>
                    <span>|</span>
                    <span className="login__linkish">Privacy Policy</span>
                    <span>|</span>
                    <span className="login__linkish">Cookie Policy</span>
                    <span>|</span>
                    <span className="login__linkish">Developers</span>
                    <span>|</span>
                    <span className="login__linkish">Advertising</span>
                    <span>|</span>
                    <span className="login__linkish">Settings</span>
                    <span>|</span>
                    <span>© 2025 LVRD Corp.</span>
                </p>
            </footer>
        </div>
    );
};

export default Login;
