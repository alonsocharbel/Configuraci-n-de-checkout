import React, { useState } from 'react';
import CheckoutConfig from './pages/CheckoutConfig';
import './styles/layout.css';
import './styles/components.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Botón de menú móvil */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          🏪 T1 tienda
        </div>
        <nav>
          <div className="menu-item">🏠 Inicio</div>
          <div className="menu-item">📦 Mis productos</div>
          <div className="menu-item">📋 Mis pedidos</div>
          <div className="menu-item">🛍️ Canales de venta</div>
          <div className="menu-item">📊 Reportes</div>
          <div className="menu-item">💳 Mis pagos</div>
          <div className="menu-item">👥 Clientes</div>
          <div className="menu-item">🏷️ Descuentos</div>
          <div className="menu-item">📢 Marketing</div>
          <div className="menu-item">🏪 Mi sitio</div>
          <div className="submenu">
            <div className="menu-item">Configuración</div>
            <div className="submenu">
              <div className="menu-item active">Checkout</div>
            </div>
          </div>
          <div className="menu-item">📦 Fulfillment</div>
        </nav>
      </aside>

      {/* Contenido principal */}
      <CheckoutConfig />
      
      {/* Overlay para móvil */}
      {sidebarOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
