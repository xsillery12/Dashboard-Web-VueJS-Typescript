<div align="center">

# 🚀 Frontend Engineer Take Home Test  
Dashboard Application — Vue JS + TypeScript + Tailwind CSS

This project is the outcome of the Take Home Test for the position of **Frontend Engineer**, emphasizing the development of an interactive and clean Dashboard that adheres to the assessment instructions.

<br/>

### 🛠 Tech Stack

<img src="https://raw.githubusercontent.com/vuejs/art/master/logo.svg" width="70" alt="Vue Logo"/>
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="70" alt="TS Logo"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="90" alt="Tailwind Logo"/>

</div>

---

## 📌 Tech Overview

### **Framework & Language**
<p align="left">
  <img src="https://raw.githubusercontent.com/vuejs/art/master/logo.svg" width="70" alt="Vue Logo" />
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="70" alt="TypeScript Logo" />
</p>

### **Styling**
<p align="left">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="100" alt="Tailwind CSS Logo" />
</p>

### **Utilities**
- Vue Router
- LocalStorage Authentication
- Prettier Formating
- Vue Chart.js

---

## 📄 Main Features

### 🔐 1. Login Page
- Input Email & Password
- Dummy login validation:
  - **email:** `admin@example.com`
  - **password:** `admin123`
-- Redirect to Dashboard upon success
- Display error if login fails
- Token stored using `localStorage`

---

### 📊 2. Dashboard Page

#### Header
- Notification Icon
- Profile Photo
- Logout
- Confirmation Modal for Logout

#### Sidebar Navigasi (Dummy)
- Dashboard    
- Reports
  - Weekly Report
  - Monthly Report
- Users

#### Summary Cards
Displaying 4 static data:
- Total Users  
- Transaction  
- Revenue  
- Pending Issues  

#### Data Table
Column:
- ID
- Category
- Company
- Product
- Price
- Approved By

Features:
- Sorting (ASC/DESC)
- Searching
- Pagination
- Filter Role

#### Charts
- Bar Chart
- Pie Chart
- Line Chart

---

## 🗄️ Dummy Data
All data (summary & table) utilizes static data.

---

## ⚙️ How to Run The Project

### 1. Install The Dependencies
```bash
npm install
```
### 2. Run the Project
```bash
npm run dev
```
### 3. Access to browser
```bash
http://localhost:port
```
## 🔒 Authentication Logic
The login valid if:
```bash
email === "admin@example.com" && password === "admin123"
```
The token is stored in localStorage and verified through the router guard.

## ✨ Author

Frontend Assessment — Muhammad Daffa Fachreza
