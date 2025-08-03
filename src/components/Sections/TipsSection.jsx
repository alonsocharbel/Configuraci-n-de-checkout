import React from 'react';
import InfoTooltip from '../UI/InfoTooltip';
import Toggle from '../UI/Toggle';

const TipsSection = () => {
  return (
    <div className="config-section section-disabled">
      <h2 className="section-title">
        PROPINAS
        <InfoTooltip text="Los clientes pueden elegir entre 3 opciones predefinidas o introducir una cantidad personalizada" />
      </h2>
      <div className="section-divider" />
      <p className="section-description">
        Los clientes pueden elegir entre 3 opciones predefinidas o introducir una cantidad personalizada
      </p>
      
      <Toggle
        id="tips-enabled"
        label="Mostrar opciones de propina en la pantalla de pago"
        checked={false}
        onChange={() => {}}
        disabled={true}
      />
    </div>
  );
};

export default TipsSection;
