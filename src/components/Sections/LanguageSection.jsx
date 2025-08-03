import React from 'react';

const LanguageSection = ({ onEditContent }) => {
  return (
    <div className="config-section">
      <h2 className="section-title">IDIOMA DE LA PANTALLA DE PAGO</h2>
      <div className="section-divider" />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <select className="dropdown" value="es" disabled>
          <option value="es">Español</option>
        </select>
        <button className="link" onClick={onEditContent}>
          Editar contenido de la pantalla de pago
        </button>
      </div>
    </div>
  );
};

export default LanguageSection;
