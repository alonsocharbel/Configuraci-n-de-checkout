import React from 'react';
import RadioGroup from '../UI/RadioGroup';
import { OPTIONS } from '../../utils/constants';

const CustomerInfo = ({ config, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...config,
      [field]: value
    });
  };

  return (
    <div className="config-section">
      <h2 className="section-title">INFORMACIÓN DEL CLIENTE</h2>
      <div className="section-divider" />
      
      <div className="subsection">
        <h3 className="subsection-title">Nombre completo</h3>
        <RadioGroup
          name="fullName"
          options={OPTIONS.fullName}
          value={config.fullName}
          onChange={(value) => handleChange('fullName', value)}
        />
      </div>

      <div className="subsection">
        <h3 className="subsection-title">Nombre de la empresa</h3>
        <RadioGroup
          name="companyName"
          options={OPTIONS.fieldRequirement.map(opt => ({
            ...opt,
            recommended: opt.value === 'none'
          }))}
          value={config.companyName}
          onChange={(value) => handleChange('companyName', value)}
        />
      </div>

      <div className="subsection">
        <h3 className="subsection-title">Línea de dirección 2 (apartamento, unidad, etc.)</h3>
        <RadioGroup
          name="addressLine2"
          options={OPTIONS.fieldRequirement.map(opt => ({
            ...opt,
            recommended: opt.value === 'optional'
          }))}
          value={config.addressLine2}
          onChange={(value) => handleChange('addressLine2', value)}
        />
      </div>

      <div className="subsection">
        <h3 className="subsection-title">Número de teléfono de la dirección de envío</h3>
        <RadioGroup
          name="shippingPhone"
          options={OPTIONS.fieldRequirement.map(opt => ({
            ...opt,
            recommended: false
          }))}
          value={config.shippingPhone}
          onChange={(value) => handleChange('shippingPhone', value)}
        />
      </div>
    </div>
  );
};

export default CustomerInfo;
