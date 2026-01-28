# 🚀 AI & Automation Portfolio

![Version](https://img.shields.io/badge/version-1.0.0-blueviolet)
![Build Status](https://img.shields.io/badge/CI%2FCD-Cloud%20Build-success)
![Platform](https://img.shields.io/badge/Platform-Google%20Cloud%20Run-blue)
![Stack](https://img.shields.io/badge/Tech-Node.js%20|%20Alpine.js%20|%20Tailwind-teal)

A high-performance, AI-integrated developer portfolio showcasing the intersection of **Automation Engineering** and **Generative AI Workflows**. This project demonstrates a production-grade deployment using serverless containers, leveraging a custom "Cyberpunk x Cottagecore" aesthetic built on a lightweight, framework-agnostic stack.

---

## ✨ Features

### 🧠 Aura AI Assistant
Integrated **Google Gemini 1.5 Flash** model (via `@google/generative-ai`) providing a conversational interface ("Aura") that can answer questions about professional experience, technical skills, and architecture.

### 📊 Interactive Command Dashboard
A responsive, glassmorphic dashboard featuring:
-   **Real-time Metrics**: Dynamic charts powered by **Chart.js** visualizing skill proficiency and learning progress.
-   **System Stats**: Simulated server metrics (Memory, Ping, Status) for immersive effect.
-   **Map Interface**: "Operations Map" showing global activity zones.

### 🎨 Dynamic Theme System
-   **Cyberpunk x Cottagecore Aesthetic**: A unique blend of neon pinks/mints (`#FF2E88`, `#4AF2A1`) against deep void greens (`#050505`).
-   **Persistent Theme**: Light/Dark mode toggles saved to local storage, ensuring user preference flows across sessions.
-   **Responsive Design**: Mobile-first architecture using **Tailwind CSS**, ensuring perfect layout on all devices.

---

## 🛠️ Tech Stack

This project deliberately eschews heavy frontend frameworks (React/Vue) in favor of a "closer to the metal" approach for maximum performance and control.

### Frontend
-   **HTML5 & Vanilla JS**: Core structure and logic.
-   **Alpine.js**: Lightweight reactive state management (used for tabs, toggles, and data binding).
-   **Tailwind CSS (v4 CLI)**: Utility-first styling with a custom build step for arbitrary value support and optimization.
-   **Chart.js**: Hardware-accelerated data visualization.
-   **Font Awesome**: Iconography.

### Backend
-   **Node.js (v18+)**: Server-side runtime.
-   **Express**: Lightweight web server handling API routes and static file serving.
-   **Nodemailer**: SMTP transport for the contact form.

### AI & Cloud
-   **Google Gemini API**: Generative AI model integration.
-   **Google Cloud Run**: Serverless container hosting (auto-scaling).
-   **Google Cloud Build**: CI/CD pipeline.
-   **Artifact Registry**: Container image storage.

---

## 📂 Project Structure

```text
/
├── public/              # Static assets (served by Express)
│   ├── index.html       # Main SPA entry point
│   ├── code_architecture.html # Documentation page
│   ├── script.js        # Frontend logic (Alpine.js integration)
│   ├── style.css        # Compiled CSS output (do not edit directly)
│   └── styles/          # Source CSS
│       └── input.css    # Tailwind source file
├── server.js            # Node.js/Express backend & API routes
├── cloudbuild.yaml      # Google Cloud Build configuration
├── Dockerfile           # Container definition
├── package.json         # Dependencies & Scripts
└── .env                 # Environment variables (local only)
```

---

## 🚀 Getting Started

### Prerequisites
-   Node.js (v18 or higher)
-   npm
-   Google Cloud SDK (optional, for deployment)

### Local Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/charlenecordero/ai-portfolio.git
    cd ai-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    PORT=8080
    GEMINI_API_KEY=your_google_gemini_key
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ```

4.  **Build CSS**
    Regenerate the Tailwind styles:
    ```bash
    npm run build
    ```

5.  **Start the Server**
    ```bash
    npm start
    ```
    Visit `http://localhost:8080` in your browser.

---

## ☁️ Deployment

The project is designed for **Google Cloud Run**.

### Automated (CI/CD)
Pushing to the `main` branch triggers the **Cloud Build** pipeline defined in `cloudbuild.yaml`, which:
1.  Builds the Docker container.
2.  Pushes it to the Google Artifact Registry (`asia-southeast1`).
3.  Deploys the new revision to Cloud Run.

### Manual Deployment
You can trigger a build manually using the Google Cloud CLI:

```bash
gcloud builds submit --config cloudbuild.yaml .
```

---

## 👤 Author

**Charlene Anne S. Cordero**
*   **Website:** [charlenecordero.com](https://charlenecordero.com)
*   **GitHub:** [@charlenecordero](https://github.com/charlenecordero)

---

> SYSTEM_STATUS: ONLINE // AI_INTEGRATION: ACTIVE // MODE: PRODUCTION