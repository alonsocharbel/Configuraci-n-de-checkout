import React from 'react';
import RadioGroup from '../UI/RadioGroup';
import Checkbox from '../UI/Checkbox';
import { OPTIONS } from '../../utils/constants';

const CustomerAccounts = ({ value, onChange }) => {
  return (
    <div className="config-section">
      <h2 className="section-title">CUENTAS DE CLIENTE</h2>
      <div className="section-divider" />
      
      <div className="subsection">
        <h3 className="subsection-title">TIPO DE CUENTAS DE CLIENTE</h3>
        <RadioGroup
          name="accountType"
          options={OPTIONS.accountType}
          value={value}
          onChange={onChange}
        />
      </div>

      <div className="subsection">
        <h3 className="subsection-title">OPCIONES POST-COMPRA</h3>
        <div style={{ opacity: 0.5, pointerEvents: 'none' }}>
          <Checkbox
            id="t1-track"
            label="Muestra un enlace para que los clientes hagan seguimiento de su pedido con T1 Track"
            checked={false}
            onChange={() => {}}
            disabled={true}
          />
          <p className="radio-description" style={{ marginLeft: '30px' }}>
            Los clientes podrán descargar la app desde la página de estado del pedido
          </p>
          <p className="radio-description" style={{ marginLeft: '30px', color: '#F15A29', fontWeight: 600 }}>
            Esta opción se habilitará en Fase 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccounts;
