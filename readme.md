# 🧠 Natural Language Task Manager

This is a full-stack web app that lets users add natural language tasks like:

```
"Finish landing page Aman by 11pm 20th June"
"Call client Rajeev tomorrow 5pm P1"
```

The app uses **OpenAI** to extract structured information from these sentences, such as:

- Task Name  
- Assignee  
- Due Date & Time  
- Priority (P1, P2, P3, P4 — default: P3)

---

## ⚙️ Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **AI Engine:** OpenAI GPT-4o or GPT-3.5-turbo

---

## 🚀 Features

- 🌐 Natural language task input  
- 🧠 AI-powered parsing using OpenAI  
- 📋 Task list UI with task, assignee, due date/time, and priority  
- ⚡ Fast frontend using Vite  
- 🔄 Bonus: Easily extend to support editing or storing tasks

---

## 🛠️ Setup Instructions

### 1. Clone the repository

### 2. Backend Setup (Node.js + Express)

```bash
cd backend
npm install
```

#### Create `.env` file

```env
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

#### Run the backend

```bash
node index.js
```

> Server runs at: `http://localhost:5000`

---

### 3. Frontend Setup (React + Vite)

```bash
cd ../frontend
npm install
npm run dev
```

> App runs at: `http://localhost:5173`

---

## 🧪 Testing the API (Optional)

Use Thunder Client or Postman:

**POST** `http://localhost:5000/api/task/parse`

**Body:**

```json
{
  "input": "Finish landing page Aman by 11pm 20th June"
}
```

---

## 📦 API Output Example

```json
{
  "task": "Finish landing page",
  "assignee": "Aman",
  "due": "2025-06-20T23:00:00",
  "priority": "P3"
}
```

---

## 📌 To-Do / Future Enhancements

- ✅ Inline editing of tasks  
- ⬜ Drag & drop task reordering  
- ⬜ Task status (To Do / In Progress / Done)  
- ⬜ Save tasks to MongoDB  
- ⬜ User login and task ownership

---



