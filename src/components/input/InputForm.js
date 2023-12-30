import React from "react";

const InputForm = ({
  name,
  placeholder,
  type,
  className,
  label,
  valueInput,
  handleOnChange,
  autoComplete = "on",
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        onChange={(e) => handleOnChange(e)}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        id={name}
        value={valueInput}
        name={name}
        className={`${className}`}
      />
    </div>
  );
};

export default InputForm;
