# React + Vite Application

This repository contains a React application built with Vite, featuring automated testing using Vitest. The project is deployed on a hosting platform and includes unit and integration tests with coverage reports.

# - **Deployment:** [https://neuradynamics.netlify.app/](https://neuradynamics.netlify.app/)

---

## 📦 Project Overview

- **Tech Stack:** React, Vite, Vitest (for testing), Redux Toolkit, Tailwind CSS, Redux Thunk
- **Testing:** Unit and integration tests using Vitest with coverage reports

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
npm run dev
```
----
# 📁 Project Structure

```text
assignment/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── productsApi.js
│   ├── app/
│   │   └── store.js
│   ├── assets/
│   ├── components/
│   ├── features/
│   │   ├── favorites/
│   │   ├── filters/
│   │   └── products/
│   ├── hooks/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
├── .gitignore
├── eslint.config.js
├── index.html
```
----
-----
# 🛠️ Features & Tools Implemented
Tailwind CSS is used for fast and responsive UI styling.

All components are styled using utility-first classes provided by Tailwind.

Tailwind config and PostCSS are already set up.
-------

## Vitest Testing
```
npx vitest

```

## Vitest automation images.
![Alt text](https://private-user-images.githubusercontent.com/100183151/448526024-ba4ab954-4f15-4f51-9fed-7311ab44a37a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTY0NzksIm5iZiI6MTc0ODQ1NjE3OSwicGF0aCI6Ii8xMDAxODMxNTEvNDQ4NTI2MDI0LWJhNGFiOTU0LTRmMTUtNGY1MS05ZmVkLTczMTFhYjQ0YTM3YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyOFQxODE2MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NzkzNmE3ZTQ4NGNhOGQyOTE4YjNiYThiNWQzODk4YTdiYWU3MDRiMTAxODRmYmI1ODM4YjFiYzA0NDgzMTk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.i6ggMsDw27cTyod7Rxia6VFlHX6Y8NevYAI7YnUt6ro)


![Alt text](https://private-user-images.githubusercontent.com/100183151/448526194-e5ffb42c-7ae7-428a-977d-f5bde333fcf0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTY2NDQsIm5iZiI6MTc0ODQ1NjM0NCwicGF0aCI6Ii8xMDAxODMxNTEvNDQ4NTI2MTk0LWU1ZmZiNDJjLTdhZTctNDI4YS05NzdkLWY1YmRlMzMzZmNmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyOFQxODE5MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZmQ5NGVmMzJhMjNjMjE3ZWQxZTAyMjM4OTA2OGYwZjVmYTY0NGY1NjkzNDYyNWY1Y2MxMmRmZjVlNGY4N2ZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.N8onw09U84NuuufniVCCQkKf4KQ1CMKVtVMFDDBi29k)

![Alt text](https://private-user-images.githubusercontent.com/100183151/448526314-f80c3fef-36ae-473a-b48e-b91f289ed6a8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTY2NDQsIm5iZiI6MTc0ODQ1NjM0NCwicGF0aCI6Ii8xMDAxODMxNTEvNDQ4NTI2MzE0LWY4MGMzZmVmLTM2YWUtNDczYS1iNDhlLWI5MWYyODllZDZhOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyOFQxODE5MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMjFlNWYwZWY2NjhiYzJmNzI3NzVjMDQxYTM1OGE5YmU2YTk0Y2Q2YWQyOWExOGZhMmFkOGI5YjQzNTAwOTgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YiiPv37wVNmaYu7s5Raq1n5hzI76lKs-YSs-BcmE4XE)
