# REST API 

A small Express-based REST API for managing todos, backed by a LibSQL database.

## ✨ Features

- Express 5 API with JSON requests
- Zod-based request validation
- LibSQL database (Turso-compatible)
- Simple CORS-enabled setup

## ✅ Prerequisites

- Node.js 18+ (recommended)
- A LibSQL database URL and auth token

## 🔧 Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in `node-js/` with the following values:

```env
DATABASE_URL=libsql://<your-db>.turso.io
DB_AUTH_TOKEN=<your-auth-token>
```

Initialize the database (creates the `todos` table if needed):

```bash
node migrations.js
```

## ▶️ Run the API

```bash
npm run dev
```

The server starts on `http://localhost:8000`.

## 📚 API Endpoints

### `GET /todos`

Returns all todos.

**Response**

```json
{
  "todos": [
    {
      "ID": 1,
      "title": "Learn REST API",
      "body": "create using express",
      "completed": 0
    }
  ]
}
```

### `POST /todos`

Create a new todo.

**Body**

```json
{
  "title": "Learn REST API",
  "body": "create using express"
}
```

**Response**

```json
{
  "message": "todo created"
}
```

## 🧭 Project Structure

```
node-js/
  index.js                # App entry
  migrations.js           # Database schema setup
  src/
    middleware/           # Validation middleware
    resources/todo/       # Todo routes, controller, schema
    utils/                # DB client
```

## ✅ Notes

- Validation errors return a `400` with an `errors` array.
- The API currently supports listing and creating todos.
