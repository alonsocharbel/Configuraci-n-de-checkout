import React from 'react';

const RadioGroup = ({ name, options, value, onChange, disabled = false }) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <div key={option.value} className="radio-option">
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="radio-input"
            disabled={disabled}
          />
          <label htmlFor={`${name}-${option.value}`} className="radio-label">
            {option.label}
            {option.recommended && (
              <span className="badge-recommended">Recomendado</span>
            )}
            {option.description && (
              <div className="radio-description">{option.description}</div>
            )}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
