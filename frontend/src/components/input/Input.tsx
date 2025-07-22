import { InputHTMLAttributes, useState } from "react";
import "./Input.scss";

type InputProps = {
    placeholder: string;
    error?: string;
    hasError?: boolean;
    charCount?: boolean;
    maxChars?: number;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
    placeholder,
    error,
    hasError = false,
    charCount = false,
    maxChars,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const isActive = focused || !!props.value;
    const showError = hasError && error;

    const currentLength = String(props.value || "").length;

    return (
        <div
            className={`input
    ${isActive ? "input__active" : ""}
    ${showError ? "input__error" : ""}
    ${isActive && showError ? "input__active--error" : ""}
  `}
        >
            <label className="p1-r">{placeholder}</label>
            <input
                maxLength={maxChars}
                {...props}
                onFocus={(e) => {
                    setFocused(true);
                    props.onFocus?.(e);
                }}
                onBlur={(e) => {
                    setFocused(false);
                    props.onBlur?.(e);
                }}
            />
            {charCount && maxChars && (
                <span className={`p2-r ${"input__char_count"}`}>
                    {currentLength} / {maxChars}
                </span>
            )}
            {showError && (
                <span className={`p2-r ${"input__error"}`}>{error}</span>
            )}
        </div>
    );
};

export default Input;
