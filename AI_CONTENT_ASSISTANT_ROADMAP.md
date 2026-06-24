# AI Content Assistant

## Proyecto Profesional para Aprender Next.js, React, TypeScript e IA

---

# 1. Descripción General

AI Content Assistant es una aplicación web que utiliza Inteligencia Artificial para ayudar a los usuarios a generar, corregir, mejorar y transformar contenido escrito.

La aplicación permite que una persona escriba un texto y obtenga asistencia inmediata mediante modelos de IA.

Este proyecto tiene como objetivo aprender:

- React
- Next.js
- TypeScript
- Tailwind CSS
- API Routes
- Server Actions
- Integración con Gemini
- Manejo de estado
- Arquitectura Full Stack
- Deploy en Vercel

---

# 2. Objetivos de Aprendizaje

Al finalizar el proyecto deberías ser capaz de:

- Crear aplicaciones modernas con Next.js.
- Consumir APIs externas.
- Crear endpoints propios.
- Gestionar variables de entorno.
- Implementar autenticación.
- Manejar formularios complejos.
- Aplicar buenas prácticas de arquitectura.
- Desplegar aplicaciones en producción.

---

# 3. MVP (Versión Inicial)

La primera versión debe ser sencilla.

Funciones:

## Corregir texto

Entrada:

Hola me llamo luis y trabajo como desarrollador frontend

Salida:

Hola, me llamo Luis y trabajo como desarrollador frontend.

---

## Mejorar redacción

Entrada:

Quiero aplicar a este trabajo porque me gusta programar.

Salida:

Me gustaría postularme para esta vacante debido a mi pasión por el desarrollo de software y mi interés en aportar valor al equipo.

---

## Resumir texto

Entrada:

Texto largo...

Salida:

Resumen corto.

---

# 4. Arquitectura General

Usuario
↓
Frontend (Next.js)
↓
API Route
↓
Gemini API
↓
Respuesta
↓
Frontend

---

# 5. Roadmap de Construcción

## Fase 1 — Setup Inicial

### Crear proyecto

```bash
npx create-next-app@latest ai-content-assistant
```

Configurar:

- TypeScript
- App Router
- ESLint
- Tailwind

---

### Estructura inicial

app/

components/

services/

lib/

hooks/

types/

public/

---

## Fase 2 — Diseño UI

Crear:

### Navbar

Elementos:

- Logo
- Nombre del proyecto
- Botón Login

---

### Hero Section

Título:

AI Content Assistant

Subtítulo:

Mejora, corrige y genera contenido usando IA.

---

### Panel principal

Dos áreas:

Input

Output

---

### Selector de acción

Botones:

- Corregir
- Mejorar
- Resumir

---

## Fase 3 — Formularios

Crear:

TextArea

Botón Generar

Validaciones:

- Campo requerido
- Mínimo de caracteres
- Máximo de caracteres

Aprendizajes:

- React Hook Form
- Validaciones

---

## Fase 4 — Integración Backend

Crear:

app/api/generate/route.ts

Responsabilidades:

- Recibir petición
- Validar entrada
- Construir prompt
- Llamar Gemini
- Retornar respuesta

---

# 6. Servicio Gemini

Crear:

services/gemini.ts

Responsabilidades:

- Configurar cliente
- Enviar prompts
- Manejar errores

Ejemplo:

generateContent()

correctText()

summarizeText()

improveText()

---

# 7. Variables de Entorno

.env.local

GEMINI_API_KEY=

Nunca exponer la API Key en frontend.

Toda llamada debe pasar por API Routes.

---

# 8. Sistema de Prompts

Crear:

lib/prompts.ts

Ejemplo:

CORRECT_TEXT_PROMPT

SUMMARIZE_TEXT_PROMPT

IMPROVE_TEXT_PROMPT

Beneficios:

- Escalabilidad
- Reutilización
- Mantenimiento sencillo

---

# 9. Estados de UI

Idle

Loading

Success

Error

Implementar:

Spinner

Skeleton

Mensajes de error

---

# 10. Historial Local

Guardar consultas realizadas.

Información:

- Tipo
- Fecha
- Texto original
- Resultado

Tecnología:

localStorage

Funciones:

Ver historial

Eliminar historial

Limpiar historial

---

# 11. Copiar Resultado

Botón:

Copy

Uso:

navigator.clipboard.writeText()

---

# 12. Contador de Caracteres

Mostrar:

245 / 2000

Aprender:

Estado derivado.

---

# 13. Sistema de Notificaciones

Implementar:

Toast

Ejemplos:

Texto copiado

Error al generar

Contenido generado

---

# 14. Tema Oscuro

Implementar:

Dark Mode

Light Mode

Persistencia:

localStorage

---

# 15. Responsive Design

Desktop

Tablet

Mobile

Objetivo:

Experiencia consistente.

---

# 16. Fase Intermedia

Agregar nuevas herramientas.

---

## Generador de Ideas para Redes

Entrada:

Tengo una empresa de mensajería.

Salida:

10 ideas para publicar.

---

## Generador de Correos

Entrada:

Solicitar reunión comercial.

Salida:

Correo profesional.

---

## Generador de Descripciones

Entrada:

Zapatos deportivos.

Salida:

Descripción optimizada.

---

## Reescribir Texto

Opciones:

Formal

Casual

Profesional

Persuasivo

---

# 17. Dashboard

Página:

/dashboard

Mostrar:

Total consultas

Herramientas usadas

Actividad reciente

Estadísticas

---

# 18. Autenticación

Implementar:

NextAuth

Google Login

Aprendizajes:

OAuth

Sesiones

Protección de rutas

---

# 19. Base de Datos

Tecnologías:

Prisma

PostgreSQL

Tablas:

User

Prompt

History

Usage

---

# 20. Sistema de Créditos

Ejemplo:

50 consultas gratis.

Tabla:

Usage

Campos:

userId

usedCredits

remainingCredits

---

# 21. Logs y Monitoreo

Implementar:

Error tracking

Request logs

Performance logs

---

# 22. Testing

Unit Tests

Integration Tests

E2E Tests

Herramientas:

Vitest

Testing Library

Playwright

---

# 23. Deploy

Vercel

Variables:

GEMINI_API_KEY

DATABASE_URL

NEXTAUTH_SECRET

---

# 24. Versión Profesional Final

Módulos:

✅ Corrector de texto

✅ Mejorador de redacción

✅ Resumidor

✅ Generador de correos

✅ Generador de ideas

✅ Generador de descripciones

✅ Historial

✅ Dashboard

✅ Login Google

✅ Base de datos

✅ Responsive

✅ Dark Mode

✅ Deploy

---

# 25. Habilidades que Demostrarás

Frontend:

- React
- Next.js
- TypeScript
- Tailwind

Backend:

- API Routes
- Prisma
- PostgreSQL

Cloud:

- Vercel

IA:

- Gemini API
- Prompt Engineering

Profesional:

- Arquitectura
- Escalabilidad
- Buenas prácticas
- Diseño de producto

---

# Resultado Esperado

Un SaaS moderno que parezca un producto real de mercado y que pueda servir como pieza principal de portafolio para posiciones de Frontend Developer o Full Stack Junior.

Mi recomendación para tu aprendizaje

No intentes construir todo de una vez. Hazlo en este orden:

Setup del proyecto.
UI básica.
Formulario.
API Route.
Integración con Gemini.
Corrector de texto.
Mejorador de redacción.
Resumidor.
Historial.
Dark Mode.
Dashboard.
Login con Google.
Base de datos.
