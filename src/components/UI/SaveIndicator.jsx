import React from 'react';

const SaveIndicator = ({ status }) => {
  if (!status) return null;

  const getContent = () => {
    switch (status) {
      case 'saving':
        return <span className="save-indicator saving">Guardando...</span>;
      case 'saved':
        return <span className="save-indicator saved">✓ Configuración guardada exitosamente</span>;
      default:
        return null;
    }
  };

  return getContent();
};

export default SaveIndicator;
