# 📱 Student Evaluation System — Mobile App

A cross-platform **React Native (Expo)** mobile client for the Student Evaluation System — bringing role-based academic dashboards for Admins, Teachers, and Students to Android and iOS, backed by the same PHP + MySQL API used in the web portal.

> 🌐 A full web portal version of this system (PHP + MySQL + Bootstrap) is also available: **[Student Evaluation System — Web Portal](#)** *(add your web repo link once created)*

---

## 📖 Overview

This app extends the Student Evaluation System's academic evaluation, attendance, and grading workflows into a native mobile experience. It consumes the same backend API as the web portal, so data stays in sync across both platforms — enter attendance on the web, view it instantly on mobile, and vice versa.

Built as a Mobile App Development project at **Fatima Jinnah Women University**.

---

## ✨ Features

### 🛡️ Admin
- Role-based dashboard with sidebar navigation
- Stat cards + chart cards for at-a-glance academic analytics
- Manage courses, enrollments, fees, and users *(in progress)*

### 👩‍🏫 Teacher
- Personal dashboard with course analytics
- Mark attendance and enter/save grades *(in progress)*
- View evaluation results submitted by students *(in progress)*

### 👩‍🎓 Student
- Personal dashboard with attendance & grade overview
- View marks and attendance history *(in progress)*
- Submit course evaluation feedback *(in progress)*

### 🔐 Core System
- Single login screen with **Student / Teacher / Admin** role selector
- Global auth state via MobX (`authStore`) — persists role and session across screens
- Protected routes that redirect based on login/role state
- Reusable UI components: `Sidebar`, `StatsBox`, `ChartCard`, `Table`, `ProtectedRoute`
- Talks directly to the same PHP REST-style endpoints as the web app (e.g. `api/login.php`)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native (Expo) |
| Routing | Expo Router (file-based routing) |
| Language | TypeScript |
| State Management | MobX |
| Networking | Fetch API → PHP backend |
| Backend (shared) | PHP + MySQL (same as web portal) |

---

## 📂 Project Structure

```
Mobile APP project/
├── app/
│   ├── _layout.tsx            # Root layout (Expo Router entry)
│   ├── login.tsx              # Role-based login screen
│   ├── store/
│   │   └── authStore.ts       # MobX auth/session store
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── StatsBox.tsx
│   │   ├── ChartCard.tsx
│   │   ├── Table.tsx
│   │   └── ProtectedRoute.tsx
│   ├── admin/
│   │   ├── index.tsx          # Admin dashboard
│   │   ├── admin_analytics.tsx
│   │   ├── manage_courses.tsx
│   │   ├── manage_enrollments.tsx
│   │   ├── manage_fees.tsx
│   │   └── manage_users.tsx
│   ├── teacher/
│   │   ├── index.tsx          # Teacher dashboard
│   │   ├── attendance.tsx
│   │   ├── enter_marks.tsx
│   │   ├── save_marks.tsx
│   │   ├── view_attendance.tsx
│   │   ├── analytics.tsx
│   │   └── evaluation_results.tsx
│   └── student/
│       ├── index.tsx          # Student dashboard
│       ├── attendance.tsx
│       ├── view_marks.tsx
│       └── evaluate.tsx
├── api/
│   └── login.php               # Shared PHP auth endpoint
└── assets/
```

---

## ⚙️ Getting Started (Local Setup)

1. **Install prerequisites:**
   ```bash
   npm install -g expo-cli
   ```
2. **Clone this repo:**
   ```bash
   git clone https://github.com/<your-username>/student-evaluation-mobile.git
   cd student-evaluation-mobile
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Point the app at your backend:** update the API base URL (currently a local IP, e.g. `http://192.168.0.101/university_portal/api/`) in the login/auth calls to match your machine's local IP or hosted API URL.
5. **Run the app:**
   ```bash
   npx expo start
   ```
   Then scan the QR code with **Expo Go** (Android/iOS) or run on an emulator.

> ℹ️ This app currently depends on the same PHP/MySQL backend as the [web portal](#) — run that locally (e.g. via XAMPP) so both the web and mobile clients hit the same API and database.

---

## 🖼️ Screenshots

added in the link 


---

## 🚧 Limitations & Roadmap

- Several screens (attendance marking, grade entry, evaluation submission on mobile) are scaffolded but still **in progress**
- API base URL is currently hardcoded to a local network IP — needs an environment-based config for production
- **Planned:** AsyncStorage-based session persistence, push notifications for grade/attendance updates, offline caching, shared TypeScript API client with the web app

---

## 👥 Team

Built as a Mobile App Development project at Fatima Jinnah Women University, alongside the web portal version of the same system.

**Course:** Mobile Application Development

---

## 📄 License

This project was built for academic purposes. Feel free to fork and adapt for learning — attribution appreciated.
