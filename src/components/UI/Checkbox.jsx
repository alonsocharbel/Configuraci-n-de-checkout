import React from 'react';

const Checkbox = ({ id, label, checked, onChange, disabled = false }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox-input"
        disabled={disabled}
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
