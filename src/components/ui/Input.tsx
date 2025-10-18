import React, { forwardRef } from "react";

interface InputProps {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

// Forward ref to the input element
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = "text",
      name,
      value,
      placeholder,
      onChange,
      className = "",
      required = false,
      disabled = false,
      autoFocus = false,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${className} app-input`}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    );
  }
);

Input.displayName = "Input"; // For debugging and dev tools

export default Input;
