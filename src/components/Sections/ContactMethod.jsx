import React from 'react';
import RadioGroup from '../UI/RadioGroup';
import InfoTooltip from '../UI/InfoTooltip';
import { OPTIONS } from '../../utils/constants';

const ContactMethod = ({ value, onChange }) => {
  return (
    <div className="config-section">
      <h2 className="section-title">
        MÉTODO DE CONTACTO DEL CLIENTE
        <InfoTooltip text="El método de contacto que los clientes introducen en la pantalla de pago recibirá las notificaciones del pedido y del envío" />
      </h2>
      <div className="section-divider" />
      <p className="section-description">
        El método de contacto que los clientes introducen en la pantalla de pago recibirá las notificaciones del pedido y del envío
      </p>
      
      <RadioGroup
        name="contactMethod"
        options={OPTIONS.contactMethod}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactMethod;
