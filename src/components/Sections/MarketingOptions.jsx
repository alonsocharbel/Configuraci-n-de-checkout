import React from 'react';
import Toggle from '../UI/Toggle';
import InfoTooltip from '../UI/InfoTooltip';

const MarketingOptions = ({ config, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...config,
      [field]: value
    });
  };

  return (
    <div className="config-section">
      <h2 className="section-title">
        OPCIONES DE MARKETING
        <InfoTooltip text="Muestra una casilla de verificación para que los clientes se registren para recibir email marketing o marketing por SMS" />
      </h2>
      <div className="section-divider" />
      <p className="section-description">
        Muestra una casilla de verificación para que los clientes se registren para recibir email marketing o marketing por SMS
      </p>
      
      <div style={{ marginBottom: '24px' }}>
        <Toggle
          id="email-marketing"
          label="Correo electrónico"
          checked={config.emailEnabled}
          onChange={(value) => handleChange('emailEnabled', value)}
        />
        {config.emailEnabled && (
          <div className="region-list">
            Solo México (configuración por defecto)
          </div>
        )}
      </div>

      <div>
        <Toggle
          id="sms-marketing"
          label="SMS"
          checked={config.smsEnabled}
          onChange={(value) => handleChange('smsEnabled', value)}
        />
      </div>
    </div>
  );
};

export default MarketingOptions;
