import React from 'react';
import SaveIndicator from '../UI/SaveIndicator';

const Header = ({ hasChanges, onSave, saveStatus }) => {
  return (
    <div className="page-header">
      <div className="page-title-row">
        <span style={{ fontSize: '24px' }}>🛒</span>
        <h1 className="page-title">Pantalla de pago</h1>
      </div>
      
      <div className="config-card">
        <div className="config-card-header">
          <div>
            <div className="config-title">
              Configuraciones
              <span className="info-icon">
                ⓘ
                <span className="tooltip">
                  Personaliza la experiencia de pago de tus clientes
                </span>
              </span>
              <span className="badge-new">Nuevo</span>
            </div>
            <p className="config-subtitle">
              Personaliza la pantalla de pago y las cuentas de clientes
            </p>
          </div>
        </div>
        
        <div className="config-store-name">Configuración de Mi tienda</div>
        
        <div className="config-footer">
          <span className="save-info">
            Último guardado: {new Date().toLocaleDateString('es-MX')} a las {new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
          </span>
          <button 
            className="btn btn-primary"
            disabled={!hasChanges}
            onClick={onSave}
          >
            Guardar
          </button>
        </div>
      </div>
      
      {saveStatus && (
        <div style={{ marginTop: '16px' }}>
          <SaveIndicator status={saveStatus} />
        </div>
      )}
    </div>
  );
};

export default Header;
