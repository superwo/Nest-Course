# Module 1 — Lesson 2  
# Controllers in Depth (Advanced Explanation)

## Objective
In this lesson, you will fully understand how controllers work in NestJS:
- How routing works  
- Decorators for params, query, body  
- Data Transfer Objects (DTOs)  
- Built‑in validation (Pipes)  
- Returning responses (sync + async)  
- Building a small Contact API  

---

# 1. What Is a Controller?

A **controller** is responsible for handling incoming HTTP requests and sending responses back to the client.

Controllers should:
- Only handle request/response
- Be THIN  
- Delegate logic to services  
- Use DTOs + validation to structure input  

Think of a controller as:
> "The entry point where HTTP becomes TypeScript."

---

# 2. How Routing Works Internally

NestJS routing is created by:
- **@Controller() decorator** — defines a route prefix  
- **@Get(), @Post(), @Put(), @Delete()** — define endpoints  

Example:
```ts
@Controller("users")
export class UsersController {
  @Get()
  findAll() {} // GET /users

  @Get(":id")
  findOne(@Param("id") id: string) {} // GET /users/123

  @Post()
  create(@Body() dto: CreateUserDto) {} // POST /users
}
```

NestJS uses Reflect Metadata + Express Router under the hood.

---

# 3. Understanding Controller Decorators

## **@Param()**  
Extracts dynamic route parameters.

```ts
@Get(":id")
getOne(@Param("id") id: string) {
  return { id };
}
```

---

## **@Query()**  
Extracts query string values.

```ts
@Get()
search(@Query("search") search: string) {
  return { search };
}
```

Example request:  
`GET /users?search=john`

---

## **@Body()**  
Extracts JSON body.

```ts
@Post()
create(@Body() dto: CreateUserDto) {
  return dto;
}
```

---

## **@Headers()**
Get a header:

```ts
@Get()
test(@Headers("user-agent") ua: string) {
  return ua;
}
```

---

# 4. DTOs (Data Transfer Objects)

DTOs define the SHAPE of incoming data.

NestJS encourages using classes, not interfaces, because:
- Classes exist at runtime  
- Decorators attach metadata to classes  

Example DTO:
```ts
export class CreateContactDto {
  name: string;
  email: string;
  message: string;
}
```

---

# 5. Validation With Pipes (class-validator + class-transformer)

Install:
```bash
npm i class-validator class-transformer
```

Enable globally in `main.ts`:
```ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```

Now you can add validation:
```ts
export class CreateContactDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 500)
  message: string;
}
```

Now invalid requests automatically produce:
- 400 Bad Request  
- automatic error messages  

---

# 6. Returning Responses

Controllers can return:
- A JSON object  
- A Promise  
- A class instance  
- Nothing (Nest automatically returns 204)

Example async controller:
```ts
@Get()
async getData() {
  return await this.service.findAll();
}
```

---

# 7. Hands-On: Build a Contact API

## Step 1 — Generate Module + Controller + Service
```bash
nest g module contact
nest g controller contact
nest g service contact
```

---

## Step 2 — Create DTO

`src/contact/dto/create-contact.dto.ts`:
```ts
import { IsEmail, IsString, Length } from "class-validator";

export class CreateContactDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 500)
  message: string;
}
```

---

## Step 3 — Service Logic (in‑memory)

`contact.service.ts`:
```ts
@Injectable()
export class ContactService {
  private contacts = [];

  create(dto: CreateContactDto) {
    const item = { id: Date.now(), ...dto };
    this.contacts.push(item);
    return item;
  }

  findAll() {
    return this.contacts;
  }

  findOne(id: number) {
    return this.contacts.find(c => c.id === id);
  }
}
```

---

## Step 4 — Controller

`contact.controller.ts`:
```ts
@Controller("contact")
export class ContactController {
  constructor(private service: ContactService) {}

  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(Number(id));
  }
}
```

---

# 8. Diagram of Controller Request Flow

```
Client → HTTP Request
       → (Middleware)
       → (Guards)
       → (Interceptors - before)
       → (Pipes - validation)
       → Controller Method
       → Service
       → (Interceptors - after)
       → Response → Client
```

This is the NestJS request lifecycle.

---

# 9. Quiz

1. What is the purpose of a controller?  
2. What decorator extracts URL parameters?  
3. What is a DTO and why must it be a class?  
4. What are pipes used for?  
5. What happens if validation fails?

---

# 10. Practice Exercise

Create a new module: **products**
- Product has: `id`, `title`, `price`, `description`
- Implement:
  - POST /products
  - GET /products
  - GET /products/:id  
- Use DTO + validation
- Store items in-memory
- Add validation for `title` (min 3 chars) and `price` (number > 0)

---

# End of Lesson 2

Tell me when you're ready to continue with **Lesson 3 — Project Structure + Providers Deep Dive**.
