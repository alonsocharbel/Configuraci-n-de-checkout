// Valores por defecto de la configuración
export const DEFAULT_CONFIG = {
  // Método de contacto
  contactMethod: 'email', // 'email' o 'emailOrPhone'
  
  // Información del cliente
  customerInfo: {
    fullName: 'firstAndLast', // 'lastOnly' o 'firstAndLast'
    companyName: 'none', // 'none', 'optional', 'required'
    addressLine2: 'optional', // 'none', 'optional', 'required'
    shippingPhone: 'optional', // 'none', 'optional', 'required'
  },
  
  // Opciones de marketing
  marketing: {
    emailEnabled: false,
    smsEnabled: false,
  },
  
  // Tipo de cuentas
  accountType: 'optional', // 'optional' o 'required'
  
  // Preferencias avanzadas
  advancedPreferences: {
    addressCollection: 'different', // 'different' o 'same'
    noDefaultBilling: false,
  },
  
  // Límite de carrito
  cartLimit: {
    enabled: true,
    limit: 50,
  },
  
  // Idioma
  language: 'es', // Solo español en MVP
};

// Opciones de radio buttons
export const OPTIONS = {
  contactMethod: [
    {
      value: 'emailOrPhone',
      label: 'Número de teléfono o correo electrónico',
      description: null
    },
    {
      value: 'email',
      label: 'Correo electrónico',
      description: null
    }
  ],
  
  fullName: [
    {
      value: 'lastOnly',
      label: 'Requerir solo apellido',
      description: null
    },
    {
      value: 'firstAndLast',
      label: 'Requerir nombre y apellido',
      description: null
    }
  ],
  
  fieldRequirement: [
    {
      value: 'none',
      label: 'No incluir',
      recommended: true,
      description: null
    },
    {
      value: 'optional',
      label: 'Opcional',
      recommended: true,
      description: null
    },
    {
      value: 'required',
      label: 'Obligatorio',
      description: null
    }
  ],
  
  accountType: [
    {
      value: 'optional',
      label: 'Opcional',
      recommended: true,
      description: 'Los clientes pueden comprar con o sin cuenta'
    },
    {
      value: 'required',
      label: 'Obligatorio',
      description: 'Los clientes deben iniciar sesión o crear cuenta antes de pagar'
    }
  ],
  
  addressCollection: [
    {
      value: 'different',
      label: 'Permitir que la dirección de envío y la de facturación sean diferentes',
      recommended: true,
      description: 'Usa la dirección de envío como dirección de facturación de forma predeterminada para un pago más rápido'
    },
    {
      value: 'same',
      label: 'Requerir que la dirección de envío y la de facturación coincidan',
      description: 'Solo se recomienda para tiendas con una gran cantidad de pedidos fraudulentos'
    }
  ]
};
