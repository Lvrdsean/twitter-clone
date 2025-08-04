import Button from "../../components/button/Button";
import "./LoginScreen.scss";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import Input from "../../components/input/Input";
import AuthButton from "./components/AuthButton";
import Footer from "./components/Footer";
import CreateAccountForm from "./components/CreateAccountForm";

const Login = () => {
    // state
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [identifier, setIdentifier] = useState("");

    return (
        <div className="login__screen">
            <div className="login__content">
                <img src={Logo} className="login__logo" alt="logo" />
                <h2 className="login__account">Create an account</h2>
                <AuthButton
                    onClick={() => {}}
                    icon={Google}
                    className="login__button"
                >
                    Sign up with Google
                </AuthButton>
                <AuthButton
                    onClick={() => {}}
                    icon={Apple}
                    className="login__button"
                >
                    Sign up with Apple
                </AuthButton>
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
                <CreateAccountForm
                    isOpen={isCreateModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                />
                <Modal
                    isOpen={isSignInModalOpen}
                    onClose={() => {
                        setSignInModalOpen(false);
                        setIsSigningIn(true);
                    }}
                    className="login__signin"
                >
                    <div className="login__signin--container">
                        <img
                            src={Logo}
                            className="login__logo--modal"
                            alt="logo"
                        />

                        {isSigningIn ? (
                            <>
                                <h1>Sign in to X</h1>
                                <Button
                                    onClick={() => {}}
                                    className="login__button--modal"
                                >
                                    <img
                                        src={Google}
                                        className="login__logo--apple_google"
                                        alt="google"
                                    />
                                    Sign in with Google
                                </Button>
                                <Button
                                    onClick={() => {}}
                                    className="login__button"
                                >
                                    <img
                                        src={Apple}
                                        className="login__logo--apple_google"
                                        alt="apple"
                                    />
                                    Sign in with Apple
                                </Button>
                                <div className="login__divider">
                                    <p>OR</p>
                                </div>
                                <Input
                                    placeholder="Phone, email, or username"
                                    value={identifier}
                                    onChange={(e) =>
                                        setIdentifier(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={() => {}}
                                    className="p1-b login__button--next"
                                >
                                    Next
                                </Button>
                                <Button
                                    onClick={() => {}}
                                    className="p1-b login__button--forgot_password"
                                >
                                    Forgot password?
                                </Button>
                                <p className="p1-r login__terms--no_account">
                                    Don't have an account?
                                    <Button
                                        onClick={() => setIsSigningIn(false)}
                                        className="p1-r login__signin--linkish"
                                    >
                                        Sign up
                                    </Button>
                                </p>
                            </>
                        ) : (
                            <>
                                <h1>Join X today</h1>
                                <Button
                                    onClick={() => {}}
                                    className="login__signin--google_button"
                                >
                                    <img
                                        src={Google}
                                        className="login__logo--apple_google"
                                        alt="google"
                                    />
                                    Sign up with Google
                                </Button>
                                <Button
                                    onClick={() => {}}
                                    className="login__signin--apple_button"
                                >
                                    <img
                                        src={Apple}
                                        className="login__logo--apple_google"
                                        alt="apple"
                                    />
                                    Sign up with Apple
                                </Button>
                                <div className="login__signin--divider">
                                    <p>OR</p>
                                </div>
                                <Button
                                    onClick={() => setCreateModalOpen(true)}
                                    className="login__signin--create_account"
                                >
                                    Create account
                                </Button>
                                <p className="p2-r login__signin--terms">
                                    By signing up, you agree to absolutely
                                    <span className="login__signin--terms--blue">
                                        nothing
                                    </span>{" "}
                                    because this is a
                                    <span className="login__signin--terms--blue">
                                        clone.
                                    </span>
                                </p>
                                <p className="p1-r login__signin--terms--no_account">
                                    Have an account already?
                                    <Button
                                        onClick={() => setIsSigningIn(true)}
                                        className="p1-r login__signin--linkish"
                                    >
                                        Log in
                                    </Button>
                                </p>
                            </>
                        )}
                    </div>
                </Modal>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
