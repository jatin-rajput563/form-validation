import React from "react";

const CustomInput = ({ placeholder, type, value, name, onchange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onchange}
      className="max-w-[371.5px] w-full rounded-[30px] border-[0.5px] bg-white px-4 py-[16.5px] font-bold text-sm leading-[150%] text-[#737376] tracking-[-0.16px] border-[#D1E0E9]"
      required
    />
  );
};

export default CustomInput;
