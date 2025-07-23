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
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [touched, setTouched] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");

    // event handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);

        // Mark the field as "touched" once the user types anything
        if (!touched && value.length > 0) {
            setTouched(true);
        }

        // Only show error if field is empty AFTER being touched
        if (touched && value.trim() === "") {
            setNameError("What's your name?");
        } else {
            setNameError("");
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Regex to match only digits
        const isNumeric = /^\d*$/.test(value);

        if (isNumeric) {
            setPhone(value);
            setPhoneError(""); // clear error if valid
        } else {
            setPhoneError("Please enter a valid phone number.");
        }
    };

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
                    className="login__create"
                >
                    <img src={Logo} className="login__logo--modal" alt="logo" />
                    <h1 className="login__create--title">
                        Create your account
                    </h1>
                    <Input
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        hasError={!!nameError}
                        error={nameError}
                        charCount={true}
                        maxChars={50}
                    />
                    <Input
                        placeholder="Phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        hasError={!!phoneError}
                        error={phoneError}
                    />
                    <p className={`p1-r ${"login__create--linkish"}`}>
                        Use email instead
                    </p>
                    <p className="p1-b">Date of birth</p>
                    <p className="login__create--gray">
                        This will not be shown publicly. Confirm your own age,
                        even if this account is for a business, a pet, or
                        something else.
                    </p>
                    <div className="login__create--dob">
                        <Input
                            placeholder="Month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className="login__create--month"
                        />
                        <Input
                            placeholder="Day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                        <Input
                            placeholder="Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="login__create--year"
                        />
                    </div>
                    <Button
                        onClick={() => {}}
                        className={`p1-b ${"login__create--next"}`}
                    >
                        Next
                    </Button>
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
