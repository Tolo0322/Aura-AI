# AI Content Assistant

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285F4?logo=google-gemini&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-In_Development-orange)

Una aplicación SaaS moderna impulsada por Inteligencia Artificial que permite corregir, mejorar, resumir y generar contenido escrito de forma rápida y eficiente.

## 🚀 Descripción

AI Content Assistant es una aplicación Full Stack desarrollada con Next.js y React que integra modelos de IA para ayudar a los usuarios a optimizar su contenido.

El objetivo principal del proyecto es servir como plataforma de aprendizaje práctico para tecnologías modernas de desarrollo web y, al mismo tiempo, construir una aplicación con apariencia y arquitectura profesional.

---

## ✨ Funcionalidades

### MVP

- ✅ Corrección de texto
- ✅ Mejora de redacción
- ✅ Resumen de contenido
- ✅ Contador de caracteres
- ✅ Copiar resultado al portapapeles
- ✅ Historial local de consultas
- ✅ Notificaciones Toast
- ✅ Dark Mode
- ✅ Responsive Design

### Próximamente

- 🚀 Generador de correos profesionales
- 🚀 Generador de ideas para redes sociales
- 🚀 Generador de descripciones de productos
- 🚀 Reescritura de contenido por tono
- 🚀 Dashboard de estadísticas
- 🚀 Login con Google
- 🚀 Base de datos PostgreSQL
- 🚀 Sistema de créditos
- 🚀 Historial en la nube

---

## 🛠️ Tecnologías

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form

### Backend

- Next.js API Routes
- Server Actions
- Prisma ORM
- PostgreSQL

### Inteligencia Artificial

- Gemini API
- Prompt Engineering

### Infraestructura

- Vercel

### Testing

- Vitest
- Testing Library
- Playwright

---

## 📂 Estructura del Proyecto

```bash
src/
│
├── app/
│   ├── api/
│   └── dashboard/
│
├── components/
│
├── services/
│   └── gemini.ts
│
├── lib/
│   └── prompts.ts
│
├── hooks/
│
├── types/
│
├── store/
│
├── public/
│
└── styles/
```

---

## ⚙️ Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/ai-content-assistant.git
```

### 2. Entrar al proyecto

```bash
cd ai-content-assistant
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Crear variables de entorno

Crear un archivo:

```bash
.env.local
```

Agregar:

```env
GEMINI_API_KEY=TU_API_KEY
```

---

## ▶️ Ejecutar en Desarrollo

```bash
npm run dev
```

Abrir:

```bash
http://localhost:3000
```

---

## 🧠 Flujo de la Aplicación

```text
Usuario
   │
   ▼
Frontend (Next.js)
   │
   ▼
API Route
   │
   ▼
Gemini API
   │
   ▼
Respuesta generada
   │
   ▼
Frontend
```

---

## 📋 Herramientas Disponibles

### Corrector de Texto

Corrige ortografía, puntuación y gramática.

### Mejorador de Redacción

Transforma textos simples en contenido más profesional.

### Resumidor

Reduce textos extensos a ideas principales.

### Generador de Correos

Crea correos electrónicos profesionales.

### Generador de Ideas

Genera contenido para redes sociales.

### Generador de Descripciones

Produce descripciones optimizadas para productos y servicios.

---

## 🎯 Objetivos de Aprendizaje

Este proyecto busca fortalecer conocimientos en:

- Arquitectura Full Stack
- React
- Next.js
- TypeScript
- Tailwind CSS
- API Routes
- Server Actions
- Integración con IA
- Manejo de estado
- Bases de datos
- Autenticación OAuth
- Despliegue en producción

---

## 🗺️ Roadmap

### Fase 1

- [x] Configuración inicial
- [x] Diseño UI
- [ ] Formularios
- [ ] Integración Gemini

### Fase 2

- [ ] Historial local
- [ ] Dark Mode
- [ ] Responsive completo
- [ ] Nuevas herramientas IA

### Fase 3

- [ ] Dashboard
- [ ] Login Google
- [ ] PostgreSQL
- [ ] Prisma ORM

### Fase 4

- [ ] Sistema de créditos
- [ ] Monitoreo
- [ ] Testing
- [ ] Deploy en producción

---

## 📸 Capturas

Próximamente...

---

## 🚀 Deploy

La aplicación será desplegada en Vercel.

---

## 👨‍💻 Autor

Desarrollado por **@tolo0322** como proyecto de aprendizaje avanzado en React, Next.js, TypeScript e Inteligencia Artificial.

---

## 📄 Licencia

Este proyecto se distribuye bajo licencia MIT.
