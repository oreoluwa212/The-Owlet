import React from "react";

const FormSelect = ({ name, id, label, options, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <label
          className="font-semibold text-[0.8rem] text-[#344054]"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className="w-full bg-white border h-12 rounded-[8px] px-3 outline-none"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
