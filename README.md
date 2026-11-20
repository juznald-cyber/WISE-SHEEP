# 🐑 WISE SHEEP - Trivia Bíblica Multijugador en Vivo

![Wise Sheep Logo](./public/logo.jpg)

**WISE SHEEP** es una aplicación interactiva de trivia bíblica multijugador inspirada en *Kahoot*, diseñada para reuniones de jóvenes, grupos de iglesia, familias y amigos cristianos.

Permite proyectar el juego en una **pantalla grande (TV, monitor o proyector)** mientras todos los participantes responden desde sus **teléfonos celulares** en tiempo real.

---

## ✨ Características Principales

- 🖥️ **Vista Anfitrión (Pantalla / TV):**
  - Generación de sala con **Código PIN** y **Código QR** para escaneo rápido con la cámara del celular.
  - Temporizador interactivo con animación y **música/sonidos de suspenso generados con Web Audio API** (sin descargas pesadas).
  - Revelación de respuestas con **Citas Bíblicas y explicaciones contextuales**.
  - **Tabla de posiciones en vivo (Leaderboard)** con rachas de fuego.
  - **Gran Podio Final (1°, 2° y 3° puesto)** con lluvia de confeti y fanfarria triunfal.
- 📱 **Vista Jugador (Smartphones):**
  - 100% web: no requiere instalar aplicaciones desde tiendas de apps.
  - Botones táctiles grandes de colores y figuras geométricas (▲ Rojo, ◆ Azul, ● Amarillo, ■ Verde).
  - Puntuación basada en acierto + velocidad (quien responde más rápido gana más puntos).
  - Feedback visual y háptico instantáneo (*"¡Correcto! +960 pts"*).
- ⚔️ **Modalidad de Equipos:**
  - ¡Batalla de **Hombres 🦁 vs Mujeres 👑**!
  - Cada respuesta suma al marcador grupal con barras de progreso en vivo.
- 🏆 **3 Niveles de Dificultad:**
  - 🌱 **Corderito (Fácil):** Historias bíblicas populares (Arca de Noé, Jonás, David y Goliat).
  - 📜 **Discípulo (Intermedio):** Milagros de Jesús, parábolas, cartas de Pablo.
  - 👑 **Maestro (Avanzado):** Cronología, detalles históricos y profecías.
  - ✨ **Modo Progresivo:** Las preguntas van aumentando de dificultad conforme avanza la partida.
- 📖 **Banco de Preguntas Integrado:**
  - Decenas de preguntas bíblicas verificadas con sus libros, capítulos y versículos.

---

## 🚀 Despliegue en Firebase Hosting

Este proyecto está configurado para el proyecto Firebase: **`wise-sheep`**.

Para desplegarlo y mantenerlo en línea 24/7:

```bash
# 1. Instalar Firebase CLI (si no lo tienes)
npm install -g firebase-tools

# 2. Iniciar sesión en Firebase
firebase login

# 3. Desplegar a Firebase Hosting
firebase deploy --only hosting
```

Tu juego quedará disponible en:
- `https://wise-sheep.web.app`
- `https://wise-sheep.firebaseapp.com`

---

## 💻 Ejecución Local

Para probarlo localmente en tu computador:

1. Puedes abrir `index.html` con cualquier servidor local (como Live Server de VS Code, `npx serve`, o `python -m http.server 8000`).
2. Abre una pestaña como **Anfitrión** para proyectar.
3. Abre otra pestaña (o ventana de incógnito) como **Jugador** e ingresa el PIN mostrado en la pantalla.
4. ¡Gracias a `BroadcastChannel` y `localStorage`, se sincronizan al instante incluso en modo offline!

---

## 📂 Repositorio en GitHub

El código fuente está respaldado en:
[https://github.com/juznald-cyber/WISE-SHEEP](https://github.com/juznald-cyber/WISE-SHEEP)
