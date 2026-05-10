# ShortLinker API

A modern URL shortening backend built with Node.js, TypeScript, Express, Prisma, and PostgreSQL.

This project provides a RESTful API for:

- User authentication
- JWT authorization
- URL shortening
- Custom short codes
- Link management
- Link analytics

The application is designed with a scalable layered architecture and follows clean backend development practices.

---

# Features

- User registration and login
- JWT authentication
- Password hashing with Argon2
- Create short URLs
- Custom short codes
- Delete owned links
- Link click tracking
- Request validation with Zod
- PostgreSQL database
- Prisma ORM
- Modular architecture
- TypeScript support

---

# Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Language | TypeScript |
| Framework | Express 5 |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | JWT |
| Validation | Zod |
| Password Hashing | Argon2 |
| Logging | Morgan |
| Security | Helmet |
| CORS | cors |
| ID Generator | nanoid |

---

# Project Structure

```txt
src/
├── app.ts
├── index.ts
├── config/
├── database/
├── controllers/
├── services/
├── repositories/
├── middlewares/
├── routes/
├── validators/
├── utils/
├── types/
└── constants/