# Configuración de Checkout T1tienda - Front Dummy

Este es un prototipo interactivo de la configuración del checkout de T1tienda, desarrollado en React como guía visual para los equipos de UX y Backend.

## 🚀 Instalación y Ejecución

1. **Asegúrate de tener Node.js instalado** (versión 14 o superior)

2. **Instalar dependencias** (si no lo has hecho):
   ```bash
   cd ~/Documents/configuracion-de-checkout
   npm install
   ```

3. **Iniciar el proyecto**:
   ```bash
   npm start
   ```

4. **Abrir en el navegador**:
   - La aplicación se abrirá automáticamente en `http://localhost:3000`
   - Si no se abre, abre manualmente esa URL en tu navegador

## 📱 Características

### Funcionalidades Implementadas:
- ✅ Configuración de método de contacto del cliente
- ✅ Información del cliente (nombre, empresa, dirección, teléfono)
- ✅ Opciones de marketing (email y SMS)
- ✅ Tipo de cuentas de cliente
- ✅ Preferencias avanzadas (validación de direcciones, límite de carrito)
- ✅ Botón Guardar que se habilita al hacer cambios
- ✅ Animación de guardado simulado
- ✅ Validaciones en tiempo real (límite de carrito)
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Sistema de diseño T1 (colores, tipografía Manrope)

### Secciones Deshabilitadas (visible pero no funcional):
- ⏸️ Propinas
- ⏸️ T1 Track
- ⏸️ Edición de contenido

## 🎨 Sistema de Diseño

- **Colores**: Brand Red (#DB3B2B) y escala de grises
- **Tipografía**: Manrope (Google Fonts)
- **Componentes**: Radio buttons, toggles, checkboxes, tooltips
- **Layout**: Sidebar fijo + contenido scrolleable

## 📐 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout/         # Header y estructura
│   ├── Sections/       # Secciones de configuración
│   └── UI/            # Componentes de interfaz
├── pages/             # Página principal
├── styles/            # CSS y colores
└── utils/             # Constantes y utilidades
```

## 🔄 Comportamiento

1. **Valores por defecto**: Cada vez que se recarga, vuelve a la configuración inicial
2. **Detección de cambios**: El botón Guardar solo se activa si hay cambios
3. **Guardado simulado**: Muestra animación pero no persiste datos
4. **Validaciones**: El límite de carrito valida entre 1-999
5. **Responsive**: Se adapta a móvil con menú hamburguesa

## 📝 Notas

- Este es un prototipo sin backend
- Los datos no se guardan entre sesiones
- Las funciones de Fase 2 están visibles pero deshabilitadas
- Todos los textos están en español (único idioma MVP)

## 🛠️ Tecnologías

- React 18.2
- CSS3 con diseño responsive
- Google Fonts (Manrope)
- Sin dependencias adicionales

---

Desarrollado para T1tienda como guía de implementación del módulo de configuración de checkout.
