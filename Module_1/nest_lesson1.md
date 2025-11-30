# Module 1 — Lesson 1
# What Is NestJS and Why Should You Use It?

## Overview
NestJS is a TypeScript-based backend framework built on top of Node.js and Express (or Fastify).
Its goal is to make backend development scalable, structured, and easy to maintain by providing
an opinionated architecture inspired by Angular: modules, controllers, providers, dependency injection, and decorators.

---

## Why use NestJS?
- **Opinionated architecture:** clear structure for medium→large apps.
- **Dependency Injection:** makes testing and code reuse easy.
- **TypeScript-first:** designed for TypeScript.
- **Extensible:** works with REST, GraphQL, WebSockets, microservices, and more.
- **Built-in patterns:** guards, interceptors, pipes, filters.

---

## Project structure (typical)
```
src/
  app.module.ts
  main.ts
  users/
    users.module.ts
    users.controller.ts
    users.service.ts
    dto/
    entities/
  auth/
    auth.module.ts
    auth.service.ts
    strategies/
```

---

## Key Concepts
- **Module:** a logical boundary (NgModule-like).
- **Controller:** handles incoming HTTP requests and returns responses.
- **Provider / Service:** injectable class with business logic.
- **Pipe:** transform/validate incoming data.
- **Guard:** determine whether the request can proceed (authz/authn).
- **Interceptor:** transform or extend request/response behavior.
- **Middleware:** low-level processing before controllers.

---

## First Hands-on: Create a Nest project and a simple controller

### 1) Install Nest CLI and create project
```bash
npm i -g @nestjs/cli
nest new my-nest-course
```

Choose npm or yarn when prompted.

### 2) Generate a module and controller
```bash
cd my-nest-course
nest generate module hello
nest generate controller hello
```

### 3) Inspect `src/hello/hello.controller.ts`
You should see:
```ts
import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello() {
    return 'Hello World!';
  }
}
```

### 4) Run the app
```bash
npm run start:dev
```
Open: http://localhost:3000/hello → should display `Hello World!`

---

## Deeper explanation: Controllers vs Services
- Controllers should be thin: parse input, call services, return responses.
- Services contain business logic and data access. Inject services into controllers.

Example:
```ts
// cats.service.ts
@Injectable()
export class CatsService {
  private cats = [];
  create(catDto: CreateCatDto) {
    this.cats.push(catDto);
  }
  findAll() {
    return this.cats;
  }
}

// cats.controller.ts
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  findAll() {
    return this.catsService.findAll();
  }
}
```

---

## Mini Exercise (Lesson 1)
1. Create a `todo` module with `todo.controller.ts` and `todo.service.ts`.
2. Implement:
   - `POST /todo` to add a todo `{ id, title, done }`
   - `GET /todo` to list todos
3. Keep data in-memory (array) for this exercise.

---

## What we'll cover next (Lesson 2)
- Controllers in depth: route decorators, params, query, body, DTOs, validation pipes.
- Build a Contact API controller with validation and DTOs.

---

## Extra Reading
- NestJS docs: https://docs.nestjs.com
- freeCodeCamp NestJS Handbook
