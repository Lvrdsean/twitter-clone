import "./SignInForm.scss";
import Button from "../../../components/button/Button";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import Modal from "../../../components/modal/Modal";
import { useState } from "react";
import Input from "../../../components/input/Input";
import { useNavigate } from "react-router-dom";

type SignInFormProps = {
    isOpen: boolean;
    onClose: () => void;
    onOpenCreateModal: () => void;
};

const SignInForm: React.FC<SignInFormProps> = ({
    isOpen,
    onClose,
    onOpenCreateModal,
}) => {
    const navigate = useNavigate();

    const [isSigningIn, setIsSigningIn] = useState(true);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [identifierError, setIdentifierError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleCloseSignInModal = () => {
        onClose();
        setIsSigningIn(true);
        setShowPasswordModal(false);
        setIdentifier("");
        setIdentifierError("");
        setPassword("");
        setPasswordError("");
    };

    const handleOpenCreateModal = () => {
        onClose();
        onOpenCreateModal();
    };

    const handleNextClick = () => {
        if (identifier.trim().toLowerCase() === "test@email.com") {
            setIdentifierError("");
            setShowPasswordModal(true);
        } else {
            setIdentifierError("We couldn’t find your account.");
            setShowPasswordModal(false);
        }
    };

    const handleLogin = () => {
        if (password === "password") {
            setPasswordError("");
            navigate("/home");
        } else {
            setPasswordError("Incorrect password. Please try again.");
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleCloseSignInModal}
            className={
                showPasswordModal ? "signin__form--password" : "signin__form"
            }
        >
            <div className="signin__container">
                <img src={Logo} className="signin__logo" alt="logo" />

                {isSigningIn ? (
                    <>
                        <h1
                            className={showPasswordModal ? "signin__title" : ""}
                        >
                            {showPasswordModal
                                ? "Enter your password"
                                : "Sign in to X"}
                        </h1>

                        {!showPasswordModal ? (
                            <>
                                <Button
                                    onClick={() => {}}
                                    className="signin__button"
                                >
                                    <img
                                        src={Google}
                                        className="signin__logo--apple_google"
                                        alt="google"
                                    />
                                    Sign in with Google
                                </Button>
                                <Button
                                    onClick={() => {}}
                                    className="signin__button--apple"
                                >
                                    <img
                                        src={Apple}
                                        className="signin__logo--apple_google"
                                        alt="apple"
                                    />
                                    Sign in with Apple
                                </Button>
                                <div className="signin__divider">
                                    <p>OR</p>
                                </div>
                                <Input
                                    placeholder="Phone, email, or username"
                                    value={identifier}
                                    onChange={(e) => {
                                        setIdentifier(e.target.value);
                                        setIdentifierError("");
                                    }}
                                    hasError={!!identifierError}
                                    error={identifierError}
                                    onEnterPress={handleNextClick}
                                />
                                <Button
                                    onClick={handleNextClick}
                                    className="p1-b signin__button--next"
                                >
                                    Next
                                </Button>
                                <Button
                                    onClick={() => {}}
                                    className="p1-b signin__button--forgot_password"
                                >
                                    Forgot password?
                                </Button>
                                <p className="p1-r signin__terms--no_account">
                                    Don't have an account?
                                    <Button
                                        onClick={() => setIsSigningIn(false)}
                                        className="p1-r signin__link"
                                    >
                                        Sign up
                                    </Button>
                                </p>
                            </>
                        ) : (
                            <div className="signin__container--password">
                                <Input
                                    placeholder="Phone, email, or username"
                                    value={identifier}
                                    onChange={(e) => {
                                        setIdentifier(e.target.value);
                                        setIdentifierError("");
                                    }}
                                    hasError={!!identifierError}
                                    error={identifierError}
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError("");
                                    }}
                                    hasError={!!passwordError}
                                    error={passwordError}
                                    isPassword={true}
                                    onEnterPress={handleLogin}
                                />
                                <Button
                                    onClick={() => {}}
                                    className="p1-r signin__link--forgot_password"
                                >
                                    Forgot password?
                                </Button>
                                <Button
                                    onClick={handleLogin}
                                    className="p1-b signin__button--login"
                                >
                                    Log in
                                </Button>
                                <p className="p1-r signin__terms--no_account_password">
                                    Don't have an account?
                                    <Button
                                        onClick={() => setIsSigningIn(false)}
                                        className="p1-r signin__link"
                                    >
                                        Sign up
                                    </Button>
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <h1>Join X today</h1>
                        <Button onClick={() => {}} className="signin__button">
                            <img
                                src={Google}
                                className="signin__logo--apple_google"
                                alt="google"
                            />
                            Sign up with Google
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="signin__button--apple"
                        >
                            <img
                                src={Apple}
                                className="signin__logo--apple_google"
                                alt="apple"
                            />
                            Sign up with Apple
                        </Button>
                        <div className="signin__divider">
                            <p>OR</p>
                        </div>
                        <Button
                            onClick={handleOpenCreateModal}
                            className="signin__create_account"
                        >
                            Create account
                        </Button>
                        <p className="p2-r signin__terms">
                            By signing up, you agree to absolutely
                            <span className="signin__terms--blue">
                                nothing
                            </span>{" "}
                            because this is a
                            <span className="signin__terms--blue">clone.</span>
                        </p>
                        <p className="p1-r signin__terms--no_account">
                            Have an account already?
                            <Button
                                onClick={() => setIsSigningIn(true)}
                                className="p1-r signin__link"
                            >
                                Log in
                            </Button>
                        </p>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default SignInForm;
