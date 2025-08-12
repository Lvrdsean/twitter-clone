import "./CreateAccountForm.scss";
import Button from "../../../components/button/Button";
import Logo from "../../../assets/svg/Logo";
import Modal from "../../../components/modal/Modal";
import { useEffect, useState } from "react";
import Input from "../../../components/input/Input";
import Dropdown from "../../../components/dropdown/Dropdown";
import { monthOptions, dayOptions, yearOptions } from "../../../types/dropdown";

type CreateAccountFormProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
    isOpen,
    onClose,
}) => {
    // state
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
        onClose();
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
        <Modal
            isOpen={isOpen}
            onClose={handleCloseCreateModal}
            className="create__form"
        >
            <div className="create__container">
                <Logo className="create__logo" />
                <h1 className="create__title">Create your account</h1>
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
                    className="p1-r create__link"
                >
                    {useEmail ? "Use phone instead" : "Use email instead"}
                </Button>
                <p className="p1-b">Date of birth</p>
                <p className="create__description">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                </p>
                <div className="create__dob">
                    <Dropdown
                        placeholder="Month"
                        value={month}
                        onChange={handleDobChange(setMonth, setMonthError)}
                        options={monthOptions}
                        className="create__month"
                        hasError={!!monthError}
                        error={monthError}
                    />
                    <Dropdown
                        placeholder="Day"
                        value={day}
                        onChange={handleDobChange(setDay, setDayError)}
                        options={dayOptions}
                        className="create__day"
                        hasError={!!dayError}
                        error={dayError}
                    />
                    <Dropdown
                        placeholder="Year"
                        value={year}
                        onChange={handleDobChange(setYear, setYearError)}
                        options={yearOptions}
                        className="create__year"
                        hasError={!!yearError}
                        error={yearError}
                    />
                </div>
                <Button
                    onClick={handleNextClick}
                    className={`p1-b ${"create__next"}`}
                >
                    Next
                </Button>
            </div>
        </Modal>
    );
};

export default CreateAccountForm;
