# Car Doctors

Car Doctors is a full-stack web application that allows users to add products and view detailed information about them. Users can easily browse the product catalog, see essential details, and explore items of interest.

---

## 🚀 Live Demo 

- **Live Site:** https://simple-application-peach.vercel.app/

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:**  Express.js / Next.js API Routes  
- **Database:** MongoDB (Atlas)  
- **Authentication:** NextAuth (Credentials + Google)  
- **Deployment:** Vercel  

---

## ✨ Features

- Public: Home, Product listing, Details page  
- Authentication: Login / Signup with Credentials or Google  
- Protected: Add Product


---

## ⚡ Setup & Installation (Step by Step)

### ✅ Step 1: Clone the project
```bash
git clone https://github.com/<username>/<repo>.git
cd <repo>
npm install
# or
yarn install
# or
pnpm install
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_long_random_string

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
npm run dev
npm run build
npm run start
```

---
## 🌐 Route Summary

| Route/Path                 | Access       | Description                              |
|----------------------------|--------------|------------------------------------------|
| `/`                        | Public       | Home page                                |
| `/products`                | Public       | Product                                  |
| `/products/[id]`           | Public       | Product details                          |
| `/login`                   | Public       | Login page                               |
| `/register`                | Public       | Signup page                              |
| `/dashboard/add-product`   | Auth (User)  | Add new product/car                      |
| `/api/products` (POST/GET) | Auth/Public  | Add or fetch products                    |
