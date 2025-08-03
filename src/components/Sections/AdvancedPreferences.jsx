import React, { useState } from 'react';
import RadioGroup from '../UI/RadioGroup';
import Checkbox from '../UI/Checkbox';
import Toggle from '../UI/Toggle';
import InfoTooltip from '../UI/InfoTooltip';
import { OPTIONS } from '../../utils/constants';

const AdvancedPreferences = ({ config, onChange }) => {
  const [cartLimitError, setCartLimitError] = useState('');

  const handleChange = (field, value) => {
    onChange({
      ...config,
      [field]: value
    });
  };

  const handleCartLimitChange = (field, value) => {
    if (field === 'limit') {
      const numValue = parseInt(value) || 0;
      if (numValue < 1 || numValue > 999) {
        setCartLimitError('El límite debe ser entre 1 y 999');
      } else {
        setCartLimitError('');
      }
    }
    
    onChange({
      ...config,
      cartLimit: {
        ...config.cartLimit,
        [field]: field === 'limit' ? value : value
      }
    });
  };

  return (
    <div className="config-section">
      <h2 className="section-title">PREFERENCIAS AVANZADAS</h2>
      <div className="section-divider" />
      
      <div className="subsection">
        <h3 className="subsection-title">RECOPILACIÓN DE DIRECCIONES</h3>
        <p className="section-description">
          Gestiona cómo recopilas las direcciones de envío y facturación
        </p>
        
        <RadioGroup
          name="addressCollection"
          options={OPTIONS.addressCollection}
          value={config.addressCollection}
          onChange={(value) => handleChange('addressCollection', value)}
        />
        
        <div style={{ marginTop: '20px' }}>
          <Checkbox
            id="no-default-billing"
            label="No usar la dirección de envío como dirección de facturación de forma predeterminada"
            checked={config.noDefaultBilling}
            onChange={(value) => handleChange('noDefaultBilling', value)}
          />
          <p className="radio-description" style={{ marginLeft: '30px' }}>
            Solo se recomienda para tiendas que venden principalmente regalos
          </p>
        </div>
      </div>

      <div className="subsection">
        <h3 className="subsection-title">
          LÍMITE DE AGREGAR AL CARRITO
          <InfoTooltip text="Establecer una cantidad máxima por artículo que se puede agregar a un carrito" />
        </h3>
        
        <div style={{ 
          background: '#F8F8F8', 
          border: '1px solid #E7E7E7',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>🛍️</span>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                  Límite de agregar al carrito
                  <span className="badge-recommended" style={{ marginLeft: '8px' }}>Recomendado</span>
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Protege tus cantidades de inventario disponibles para evitar que se muestren
                </div>
              </div>
            </div>
            <Toggle
              id="cart-limit-enabled"
              label=""
              checked={config.cartLimit.enabled}
              onChange={(value) => handleCartLimitChange('enabled', value)}
            />
          </div>
        </div>
        
        {config.cartLimit.enabled && (
          <div className="inline-form-group">
            <label>Límite:</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={config.cartLimit.limit}
                onChange={(e) => handleCartLimitChange('limit', e.target.value)}
                className={`input-field ${cartLimitError ? 'error' : ''}`}
                min="1"
                max="999"
              />
              {cartLimitError && (
                <div className="input-error">{cartLimitError}</div>
              )}
            </div>
            <span>unidades por producto</span>
          </div>
        )}
        
        <p className="section-description" style={{ marginTop: '12px' }}>
          El límite recomendado para tu tienda es 50
        </p>
        <ul className="radio-description" style={{ marginLeft: '20px' }}>
          <li>Previene compras masivas automatizadas</li>
          <li>Protege inventario en lanzamientos</li>
          <li>Reduce riesgo de acaparamiento</li>
        </ul>
      </div>
    </div>
  );
};

export default AdvancedPreferences;
