import React from 'react';

const Toggle = ({ id, label, checked, onChange, disabled = false }) => {
  return (
    <div className="toggle-container">
      <div
        className={`toggle-switch ${checked ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && onChange(!checked)}
      >
        <div className="toggle-knob" />
      </div>
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default Toggle;
