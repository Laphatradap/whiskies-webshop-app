import React from "react";

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="form-field-container">
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};

export default FormField;
