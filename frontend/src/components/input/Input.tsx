import "./Input.scss";
import { InputHTMLAttributes, useState } from "react";
import EyeOn from "../../assets/svg/EyeOn";
import EyeOff from "../../assets/svg/EyeOff";

type InputProps = {
    placeholder: string;
    error?: string;
    hasError?: boolean;
    charCount?: boolean;
    maxChars?: number;
    isPassword?: boolean;
    className?: string;
    onEnterPress?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
    placeholder,
    error,
    hasError = false,
    charCount = false,
    maxChars,
    isPassword = false,
    className,
    onEnterPress,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const isActive = focused || !!props.value;
    const showError = hasError && error;

    const currentLength = String(props.value || "").length;

    const inputType = isPassword
        ? showPassword
            ? "text"
            : "password"
        : props.type || "text";

    return (
        <div
            className={`input
                ${isActive ? "input__active" : ""}
                ${showError ? "input__error" : ""}
                ${isActive && showError ? "input__active--error" : ""}
            `}
        >
            <div className="input__container">
                <label className="p1-r">{placeholder}</label>
                <input
                    {...props}
                    type={inputType}
                    className={className}
                    maxLength={maxChars}
                    onKeyDown={(e) => {
                        props.onKeyDown?.(e);
                        if (e.key === "Enter" && onEnterPress) {
                            e.preventDefault();
                            onEnterPress();
                        }
                    }}
                    onFocus={(e) => {
                        setFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        props.onBlur?.(e);
                    }}
                />
                {isPassword && (
                    <button
                        className="input__toggle"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <EyeOff /> : <EyeOn />}
                    </button>
                )}
            </div>
            {charCount && maxChars && isActive && (
                <span className="p2-r input__char_count">
                    {currentLength} / {maxChars}
                </span>
            )}
            {showError && <span className="p2-r input__error">{error}</span>}
        </div>
    );
};

export default Input;
