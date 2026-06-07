# MVC Tech Solutions Website

Bienvenido al repositorio oficial del sitio web de **MVC Tech Solutions**. Esta es una Single Page Application (SPA) construida para destacar los productos, servicios y filosofía del equipo detrás de MVC Tech.

## Tecnologías Utilizadas
- **React 18**
- **Vite**
- **TailwindCSS v3** (Configuración 100% personalizada)
- **React Router v6**
- **Vanilla CSS** (Componentes base, scroll suave, animaciones)
- **DM Sans** (Tipografía principal, limpia y estándar)

## Estructura del Proyecto
El proyecto está estructurado de manera modular para garantizar la escalabilidad y mantenibilidad:

- `/src/components`: Componentes reutilizables categorizados por vista (home, about, services, layout, ui).
- `/src/pages`: Las vistas principales (Inicio, Nosotros, Servicios).
- `/src/index.css`: Sistema de diseño global y utilidades personalizadas.
- `tailwind.config.js`: Tokens de diseño personalizados (colores crema/oscuros y la tipografía DM Sans).

## Instalación y Desarrollo

Para ejecutar el proyecto de forma local:

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`.

## Construcción para Producción

Para compilar el proyecto y prepararlo para producción:

```bash
npm run build
```
Los archivos optimizados y listos para subir al servidor se generarán en la carpeta `dist`.

---
*Desarrollado con pasión en Popayán, Colombia - 2026.*
