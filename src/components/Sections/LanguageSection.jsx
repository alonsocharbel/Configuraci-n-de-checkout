import React from 'react';

const LanguageSection = () => {
  return (
    <div className="config-section">
      <h2 className="section-title">IDIOMA DE LA PANTALLA DE PAGO</h2>
      <div className="section-divider" />
      
      <div>
        <select className="dropdown" value="es" disabled>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSection;
