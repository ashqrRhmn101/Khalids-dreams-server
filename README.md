**Khalids-Dreams-Server** (MongoDB + Express API) — fully production-ready.

---

# **Khalids Dreams — Server (Backend API)**

Simple and clean backend API built with **Node.js, Express, MongoDB, and Mongoose** to support the Khalid’s Dreams e-commerce application.

---

## 🚀 **Live API / Base URL**

```
https://khalids-dreams-server.vercel.app/
```

Local development:

```
http://localhost:5000
```

---

## 📌 **Features**

* REST API for managing products
* Create, Read, Update, Delete (CRUD) operations
* MongoDB + Mongoose data model
* CORS enabled for Next.js frontend
* Clean folder structure
* Fully ready for production deployment (Render, Vercel, Railway, etc.)

---

## 🛠️ **Tech Stack**

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **dotenv**
* **CORS**

---

## 📁 **Project Structure**

```
Khalids-dreams-server/
│
├── server.js
├── package.json
├── .env
│
├── models/
│   └── Product.js
│
└── routes/
    └── productRoutes.js
```

---

## 🔧 **Installation & Setup**

### 1️⃣ Clone the project

```bash
git clone <repo-url>
cd Khalids-dreams-server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/khalidsDB
```

### 4️⃣ Start the server

```bash
npm start
# or for development
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

## 🧪 **API Endpoints**

### ✅ **Get all products**

```
GET /products
```

### ✅ **Get single product**

```
GET /products/:id
```

### ✅ **Create product**

```
POST /products
```

**Request body example:**

```json
{
  "productUrl": "https://i.ibb.co.com/zV9kKHqk/moyla.webp",
  "productTitle": "Foods",
  "shortDescription": "Healthy food's",
  "longDescription": "Full details...",
  "category": "স্ন্যাকস ও ছোট খাদ্য",
  "price": "590",
  "discountPrice": "10",
  "stock": "10",
  "weight": "12",
  "tags": "foods",
  "status": "Active"
}
```

### 🔄 **Update product**

```
PUT /products/:id
```

### ❌ **Delete product**

```
DELETE /products/:id
```

---

## 🧰 **Product Schema Example**

```js
const productSchema = new mongoose.Schema({
  productUrl: String,
  productTitle: String,
  shortDescription: String,
  longDescription: String,
  category: String,
  price: String,
  discountPrice: String,
  stock: String,
  weight: String,
  tags: String,
  status: String,
  createAt: { type: Date, default: Date.now }
});
```

---

## 🌐 CORS Setup (Frontend Allowed)

```js
app.use(cors({
  origin: "http://localhost:3000",  // Next.js URL
  credentials: true
}));
```

---

## 🚀 Deployment Ready

This backend can be deployed on:

* Render
* Railway
* Vercel Serverless Functions
* Cyclic
* Heroku (if available)
* VPS / Custom Node server

---

## 👨‍💻 Author

**Khalid’s Dreams — Backend Developer**
(Feel free to add GitHub username here)

---

## 📄 License

MIT License — You’re free to modify, distribute, use commercially.

---

If you want, I can also create:
✅ `API Documentation Page`
✅ `Postman Collection`
✅ `Swagger Documentation`
✅ `Folder restructure for enterprise-level backend`

