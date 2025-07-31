import Button from "../../components/button/Button";
import "./LoginScreen.scss";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import Modal from "../../components/modal/Modal";
import { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Dropdown from "../../components/dropdown/Dropdown";
import { monthOptions, dayOptions, yearOptions } from "../../types/dropdown";
import AuthButton from "./components/AuthButton";
import Footer from "./components/Footer";

const Login = () => {
    // state
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [emailTypingTimeout, setEmailTypingTimeout] =
        useState<NodeJS.Timeout | null>(null);
    const [useEmail, setUseEmail] = useState(false);
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [monthError, setMonthError] = useState("");
    const [dayError, setDayError] = useState("");
    const [yearError, setYearError] = useState("");
    const [touched, setTouched] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        return () => {
            if (emailTypingTimeout) clearTimeout(emailTypingTimeout);
        };
    }, [emailTypingTimeout]);

    // event handlers
    const handleCloseCreateModal = () => {
        setCreateModalOpen(false);
        setNameError("");
        setPhoneError("");
        setEmailError("");
        setMonthError("");
        setDayError("");
        setYearError("");
        setTouched(false);
        setName("");
        setPhone("");
        setEmail("");
        setMonth("");
        setDay("");
        setYear("");
    };
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

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        // Clear any existing timeout
        if (emailTypingTimeout) {
            clearTimeout(emailTypingTimeout);
        }

        // Set a timeout to validate after user stops typing (e.g., 500ms)
        const timeout = setTimeout(() => {
            if (value.trim() === "") {
                setEmailError("Please enter a valid email.");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                setEmailError("Please enter a valid email.");
            } else {
                setEmailError("");
            }
        }, 500);

        setEmailTypingTimeout(timeout);
    };

    const handleDobChange = (
        setter: React.Dispatch<React.SetStateAction<string>>,
        errorSetter?: React.Dispatch<React.SetStateAction<string>>
    ) => {
        return (e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            setter(value);

            if (errorSetter && value) {
                errorSetter("");
            }
        };
    };

    const handleNextClick = () => {
        let hasError = false;

        if (!name) {
            setNameError("What's your name?");
            hasError = true;
        } else {
            setNameError("");
        }

        if (!phone) {
            setPhoneError("Please enter a valid phone number.");
            hasError = true;
        } else {
            setPhoneError("");
        }

        if (!email) {
            setEmailError("Please enter a valid email.");
            hasError = true;
        } else {
            setEmailError("");
        }

        if (!month) {
            setMonthError("Select a month.");
            hasError = true;
        } else {
            setMonthError("");
        }

        if (!day) {
            setDayError("Select a day.");
            hasError = true;
        } else {
            setDayError("");
        }

        if (!year) {
            setYearError("Select a year.");
            hasError = true;
        } else {
            setYearError("");
        }

        if (!hasError) {
            // Proceed to the next step or submit
            console.log("All good — proceed!");
        }
    };

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
                <Modal
                    isOpen={isCreateModalOpen}
                    onClose={handleCloseCreateModal}
                    className="login__create"
                >
                    <div className="login__create--container">
                        <img
                            src={Logo}
                            className="login__logo--modal"
                            alt="logo"
                        />
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
                        {!useEmail ? (
                            <Input
                                placeholder="Phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                hasError={!!phoneError}
                                error={phoneError}
                            />
                        ) : (
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                hasError={!!emailError}
                                error={emailError}
                            />
                        )}
                        <Button
                            onClick={() => setUseEmail(!useEmail)}
                            className="p1-r login__create--linkish"
                        >
                            {useEmail
                                ? "Use phone instead"
                                : "Use email instead"}
                        </Button>
                        <p className="p1-b">Date of birth</p>
                        <p className="login__create--gray">
                            This will not be shown publicly. Confirm your own
                            age, even if this account is for a business, a pet,
                            or something else.
                        </p>
                        <div className="login__create--dob">
                            <Dropdown
                                placeholder="Month"
                                value={month}
                                onChange={handleDobChange(
                                    setMonth,
                                    setMonthError
                                )}
                                options={monthOptions}
                                className="login__create--month"
                                hasError={!!monthError}
                                error={monthError}
                            />
                            <Dropdown
                                placeholder="Day"
                                value={day}
                                onChange={handleDobChange(setDay, setDayError)}
                                options={dayOptions}
                                className="login__create--day"
                                hasError={!!dayError}
                                error={dayError}
                            />
                            <Dropdown
                                placeholder="Year"
                                value={year}
                                onChange={handleDobChange(
                                    setYear,
                                    setYearError
                                )}
                                options={yearOptions}
                                className="login__create--year"
                                hasError={!!yearError}
                                error={yearError}
                            />
                        </div>
                        <Button
                            onClick={handleNextClick}
                            className={`p1-b ${"login__create--next"}`}
                        >
                            Next
                        </Button>
                    </div>
                </Modal>
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
