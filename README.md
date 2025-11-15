<div align="center">

# 🚀 Frontend Engineer Take Home Test  
Dashboard Application — Vue JS + TypeScript + Tailwind CSS

Project ini merupakan hasil pengerjaan Take Home Test untuk posisi **Frontend Engineer**, dengan fokus pada pembuatan Dashboard yang interaktif, responsive, clean, dan sesuai instruksi asesmen.

<br/>

### 🛠 Tech Stack

<img src="https://raw.githubusercontent.com/vuejs/art/master/logo.svg" width="70" alt="Vue Logo"/>
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="70" alt="TS Logo"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="90" alt="Tailwind Logo"/>

</div>

---

## 📌 Tech Overview

### **Framework & Language**
- ⚡ Vue js
- 🔷 TypeScript

### **Styling**
- 🎨 Tailwind CSS

### **Utilities**
- Vue Router
- LocalStorage Authentication
- Prettier Formating

---

## 📄 Fitur Utama

### 🔐 1. Login Page
- Input Email & Password
- Dummy login validation:
  - **email:** `admin@example.com`
  - **password:** `admin123`
- Redirect ke Dashboard jika sukses
- Menampilkan error jika login gagal
- Token disimpan menggunakan `localStorage`

---

### 📊 2. Dashboard Page

#### Header
- Sapaan user
- Icon notifikasi
- Foto profil
- Tombol Logout
- Modal konfirmasi logout dengan efek blur

#### Sidebar Navigasi (Dummy)
- Dashboard  
- Users  
- Reports  

#### Summary Cards
Menampilkan empat data statis:
- Total Users  
- Transaction  
- Revenue  
- Pending Issues  

#### Data Table
Kolom:
- ID
- Category
- Company
- Product
- Price
- Approved By

Fitur:
- Sorting (ASC/DESC)
- Searching (berdasarkan seluruh kolom)
- Pagination
- Filter Role

---

## 🗄️ Dummy Data
Semua data (summary & tabel) menggunakan data statis.

---

## ⚙️ Cara Menjalankan Project

### 1. Install Dependencies
```bash
npm install
```
### 2. Jalankan Project
```bash
npm run dev
```
### 3. Akses pada browser
```bash
http://localhost:port
```
## 🔒 Authentication Logic
Login valid jika:
```bash
email === "admin@example.com" && password === "admin123"
```
Token disimpan di localStorage dan dicek via router guard.

## ✨ Author

Frontend Assessment — Muhammad Daffa Fachreza
