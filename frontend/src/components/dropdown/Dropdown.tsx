import { useState, SelectHTMLAttributes } from "react";
import "./Dropdown.scss";
import ChevronDown from "../../assets/svg/ChevronDown";

type DropdownOption = {
    label: string;
    value: string;
};

type DropdownProps = {
    placeholder: string;
    options: DropdownOption[];
    error?: string;
    hasError?: boolean;
    className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Dropdown: React.FC<DropdownProps> = ({
    placeholder,
    options,
    error,
    hasError = false,
    className,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const isActive = focused || (!!props.value && props.value !== "");

    const showError = hasError && error;

    return (
        <div
            className={`dropdown
    ${isActive ? "dropdown__active" : ""}
    ${showError ? "dropdown__error" : ""}
    ${isActive && showError ? "dropdown__active--error" : ""}
  `}
        >
            <label className="p1-r">{placeholder}</label>
            <div className="dropdown__container">
                <select
                    className={className}
                    {...props}
                    onFocus={(e) => {
                        setFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        props.onBlur?.(e);
                    }}
                >
                    <option value="" disabled hidden></option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="dropdown__chevron" fill="#71767b" />
            </div>
            {showError && (
                <span className={`p2-r ${"dropdown__error"}`}>{error}</span>
            )}
        </div>
    );
};

export default Dropdown;
