# 🌞 SolarAI – Smart Solar Solutions (Frontend)

A modern, responsive, AI-inspired solar energy website built using **React** and **Tailwind CSS**, designed to showcase solar products, estimate installation costs, compare plans, and engage users with an interactive chatbot experience.

---

## 🚀 Project Overview

**SolarAI** is a frontend web application for a solar energy company.  
It helps users understand solar solutions, calculate installation costs, compare solar plans, and interact with a smart chatbot.

This project is **frontend-focused**, backend-ready, and suitable for real-world business use, client demos, or portfolio showcasing.

---

## ✨ Features

### 🏠 Home Page
- Modern hero section with smooth animations
- Clear call-to-action buttons
- Responsive design for all devices

### 📊 AI-Powered Solar Estimator
- Inputs:
  - Roof area (sq.ft)
  - Monthly electricity bill
  - City
- Outputs:
  - Recommended system size (kW)
  - Installation cost
  - Yearly savings
  - ROI period
  - CO₂ reduction
- Smart roof feasibility check with warning UI

### 🔋 Solar Panels
- Panel types:
  - Monocrystalline
  - Polycrystalline
  - Thin Film
- Efficiency, lifespan, and best-use comparison
- Clean card-based layout

### 📈 Compare Plans
- Compare different solar system capacities
- Visual progress indicators
- Best plan recommendations for homes and businesses

### 💬 Smart Chatbot
- Floating chatbot available on all pages
- Theme-matched UI
- Answers questions about:
  - Solar cost
  - Panel types
  - ROI & savings
  - Maintenance & warranty
  - Company & contact details
- Open / close toggle support
- Easily extendable to real AI (OpenAI / Gemini)

### 📍 Contact Page
- Embedded Google Map (Chennai location)
- Professional contact layout

### 🧭 Navigation & UX
- React Router based navigation
- Smooth page transitions using Framer Motion
- Fully responsive (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide Icons
- ShadCN UI

### Tools
- Vite
- npm
- Git & GitHub

---

##🧮 Estimator Logic

-Electricity unit rate: ₹6 per unit

-Power generation: 120 units per kW per month

-Roof requirement: 100 sq.ft per kW

-Installation cost: ₹55,000 per kW

-Automatically checks roof feasibility

-Designed to be reusable for backend APIs

---

##Chatbot Details

Rule-based frontend chatbot

No backend dependency

Fast and lightweight

Easily extendable to:

AI APIs (OpenAI / Gemini)

Lead capture (name, phone, city)

Admin dashboard analytics

---

##Design Highlights

Solar-themed color palette (green & amber)

Glassmorphism UI cards

Gradient highlights

Clean typography

Mobile-first responsive design

---

##Future Enhancements

Backend integration (Spring Boot / Node.js)

User authentication

Payment gateway (Razorpay / Stripe)

Government subsidy logic

Multi-location support

Real AI chatbot integration

## 📂 Project Structure

src/
├── components/
│ ├── Navbar
│ ├── Footer
│ ├── Chatbot
│ │ ├── Chatbot.tsx
│ │ ├── ChatbotButton.tsx
│ │ └── chatbotData.ts
│ └── UI components
│
├── pages/
│ ├── Index.tsx
│ ├── Estimator.tsx
│ ├── Panels.tsx
│ ├── Compare.tsx
│ ├── Payment.tsx
│ ├── Contact.tsx
│ ├── About.tsx
│ ├── AdminDashboard.tsx
│ └── NotFound.tsx
│
├── utils/
│ └── estimator.ts
│
├── App.tsx
├── main.tsx
└── index.css
