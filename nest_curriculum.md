# 📘 **Custom Stable NestJS Curriculum (Updated)**

## **MODULE 1 — NestJS Fundamentals (Beginner → Intermediate)**

### **Lesson 1: What is NestJS and Why Use It**

- NestJS philosophy (architecture + DI + decorators)
- Comparison with Express, Next.js API Routes
- Understanding Modules, Controllers, Providers

### **Lesson 2: Setup & Project Structure**

- Install Nest CLI
- Project scaffolding
- Understanding folders
- Creating first modules & controllers

### **Lesson 3: Dependency Injection Explained**

- Providers
- Services
- Injection tokens
- Singleton behavior

### **Lesson 4: Controllers Deep Dive**

- Route methods (`GET`, `POST`, `PATCH`, `DELETE`)
- Route parameters
- DTOs (Data Transfer Objects)
- Return types

### **Lesson 5: Pipes, Validation & Parsing**

- `ValidationPipe`
- Class-validator & class-transformer
- Custom pipes
- Global pipes

📌 **Mini-project 1:**  
**Tasks API** — CRUD with validation

---

## **MODULE 2 — Intermediate Features**

### **Lesson 6: Providers & Modules Advanced**

- Shared modules
- Global modules
- ConfigModule for environment variables

### **Lesson 7: Exception Filters**

- Catching errors globally
- HTTP exceptions
- Custom error responses

### **Lesson 8: Interceptors**

- Transform response
- Logging interceptor
- Timeout interceptor

### **Lesson 9: Middleware System**

- When to use middleware vs guards vs interceptors
- Writing custom middleware
- Binding to modules/routes

📌 **Mini-project 2:**  
**Logging + Rate Limiting Middleware**

---

## **MODULE 3 — Authentication & Authorization**

### **Lesson 10: Understanding Guards**

- Guard lifecycle
- Execution context
- When guards run
- Guard vs Middleware vs Interceptor

### **Lesson 11: Implementing LocalStrategy (Login)**

- Passport setup
- Local strategy
- LocalAuthGuard
- req.user flow explained deeply

### **Lesson 12: Implementing JwtStrategy (Protected Routes)**

- Access tokens
- JwtAuthGuard
- req.user in JWT context
- Token expiration

### **Lesson 13: Refresh Tokens (Advanced Auth)**

- Token rotation
- Anti-replay
- Storing refresh tokens securely

### **Lesson 14: Role-Based Access Control**

- @Roles() decorator
- RolesGuard
- Metadata reflection

### **Lesson 15: Permissions / Policies (Advanced RBAC)**

- Policies guard
- Ability factories
- CASL example

📌 **Real-Project 1:**  
**Complete Auth System**

- Register, Login, Access & Refresh Tokens, Logout
- Role system (admin/user)
- Protect endpoints
- Secure API for mobile app (React Native)

---

## **MODULE 4 — Database Integration**

### **Lesson 16: Connecting NestJS with Databases**

- PostgreSQL + Prisma (recommended)
- TypeORM (optional)
- Mongoose for MongoDB

### **Lesson 17: Repository Pattern**

- Abstract database logic
- Services vs repositories

### **Lesson 18: Transactions & Relations**

- Prisma transactions
- Multi-model relations

📌 **Real-Project 2:**  
**User Profiles API with database**

---

## **MODULE 5 — Advanced Backend Topics**

### **Lesson 19: File Uploads & Storage**

- Single / multiple upload
- Streaming files
- Upload to Google Cloud Storage
- Upload to Supabase Storage

### **Lesson 20: Modules for Larger Apps**

- Feature modules
- Domain-driven design ideas

### **Lesson 21: Working with WebSockets**

- Gateways
- Real-time communication

### **Lesson 22: Task Scheduling**

- Cron jobs
- Cron expressions
- Queues (BullMQ)

### **Lesson 23: Caching**

- Redis caching
- Cache interceptor
- Manual caching

📌 **Real-Project 3:**  
**Upload System with GCS + database**

- Large file support
- Signed URLs
- Expiring URLs
- Integrate with Next.js frontend

---

## **MODULE 6 — Building APIs for Mobile Applications**

### **Lesson 24: Handling Mobile Auth**

- Short-lived tokens
- Refresh tokens in mobile
- SMS-based login (Firebase or App.bird)
- Protecting mobile endpoints

### **Lesson 25: Versioning APIs**

- Mobile compatibility
- API version strategy

📌 **Mini-Project 4:**  
**NestJS API for Expo React Native app**

---

## **MODULE 7 — Deployment, CI/CD & Production**

### **Lesson 26: Production Configuration**

- Environment variables
- Configuration modules
- Secrets management

### **Lesson 27: Deploying to Google Cloud Run**

- Dockerfile
- CI/CD
- Automatic deploys

### **Lesson 28: Security Best Practices**

- Helmet
- Rate limiting
- CSRF considerations
- CORS config

### **Lesson 29: Logging**

- Pino
- Winston
- Distributed logging

📌 **Final Project:**  
**Deploy production-ready NestJS API to Google Cloud Run**

---

## **MODULE 8 — Bonus: Microservices**

### **Lesson 30: NestJS Microservices**

- Message patterns
- Event patterns
- Redis transport
- NATS transport

### **Lesson 31: API Gateway**

- Aggregating services
- Authentication gateway

---

## **Optional Add-ons**

- GraphQL Module
- gRPC Microservices
- Email sending (Nodemailer + OAuth2)
- Webhook receivers
- Stripe integration
- Payment flows
- Web scraping
