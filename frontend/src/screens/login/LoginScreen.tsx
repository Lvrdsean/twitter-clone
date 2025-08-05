import Button from "../../components/button/Button";
import "./LoginScreen.scss";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import { useState } from "react";
import AuthButton from "./components/AuthButton";
import Footer from "./components/Footer";
import CreateAccountForm from "./components/CreateAccountForm";
import SignInForm from "./components/SignInForm";

const Login = () => {
    // state
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false);

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
                {isCreateModalOpen && !isSignInModalOpen && (
                    <CreateAccountForm
                        isOpen={isCreateModalOpen}
                        onClose={() => setCreateModalOpen(false)}
                    />
                )}
                {isSignInModalOpen && !isCreateModalOpen && (
                    <SignInForm
                        isOpen={isSignInModalOpen}
                        onClose={() => setSignInModalOpen(false)}
                        onOpenCreateModal={() => setCreateModalOpen(true)}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Login;
