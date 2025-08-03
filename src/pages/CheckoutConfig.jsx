import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header';
import ContactMethod from '../components/Sections/ContactMethod';
import CustomerInfo from '../components/Sections/CustomerInfo';
import MarketingOptions from '../components/Sections/MarketingOptions';
import TipsSection from '../components/Sections/TipsSection';
import LanguageSection from '../components/Sections/LanguageSection';
import CustomerAccounts from '../components/Sections/CustomerAccounts';
import AdvancedPreferences from '../components/Sections/AdvancedPreferences';
import { DEFAULT_CONFIG } from '../utils/constants';

const CheckoutConfig = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [hasChanges, setHasChanges] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  // Detectar cambios comparando con default
  useEffect(() => {
    const configChanged = JSON.stringify(config) !== JSON.stringify(DEFAULT_CONFIG);
    setHasChanges(configChanged);
  }, [config]);

  const handleSave = () => {
    setSaveStatus('saving');
    
    // Simular guardado
    setTimeout(() => {
      setSaveStatus('saved');
      setHasChanges(false);
      
      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        setSaveStatus(null);
      }, 3000);
    }, 1500);
  };

  const handleContactMethodChange = (value) => {
    setConfig({ ...config, contactMethod: value });
  };

  const handleCustomerInfoChange = (newCustomerInfo) => {
    setConfig({ ...config, customerInfo: newCustomerInfo });
  };

  const handleMarketingChange = (newMarketing) => {
    setConfig({ ...config, marketing: newMarketing });
  };

  const handleAccountTypeChange = (value) => {
    setConfig({ ...config, accountType: value });
  };

  const handleAdvancedPreferencesChange = (newPreferences) => {
    setConfig({ 
      ...config, 
      advancedPreferences: newPreferences.advancedPreferences || newPreferences,
      cartLimit: newPreferences.cartLimit || config.cartLimit
    });
  };

  const handleEditContent = () => {
    alert('Funcionalidad de edición de contenido disponible próximamente');
  };

  return (
    <div className="main-content">
      <Header 
        hasChanges={hasChanges}
        onSave={handleSave}
        saveStatus={saveStatus}
      />
      
      <ContactMethod 
        value={config.contactMethod}
        onChange={handleContactMethodChange}
      />
      
      <CustomerInfo 
        config={config.customerInfo}
        onChange={handleCustomerInfoChange}
      />
      
      <MarketingOptions 
        config={config.marketing}
        onChange={handleMarketingChange}
      />
      
      <TipsSection />
      
      <LanguageSection 
        onEditContent={handleEditContent}
      />
      
      <CustomerAccounts 
        value={config.accountType}
        onChange={handleAccountTypeChange}
      />
      
      <AdvancedPreferences 
        config={{
          ...config.advancedPreferences,
          cartLimit: config.cartLimit
        }}
        onChange={handleAdvancedPreferencesChange}
      />
    </div>
  );
};

export default CheckoutConfig;
