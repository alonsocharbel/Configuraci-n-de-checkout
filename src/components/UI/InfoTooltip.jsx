import React from 'react';

const InfoTooltip = ({ text }) => {
  return (
    <span className="info-icon">
      ⓘ
      <span className="tooltip">{text}</span>
    </span>
  );
};

export default InfoTooltip;
