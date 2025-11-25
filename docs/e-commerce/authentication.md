---
sidebar_position: 2
---

# Autenticación

Este microservicio utiliza JWT para la autenticación.

## Cómo obtener un token

POST `https://myapi.azurewebsites.net/api/auth/login`

**Body:**

```json
{
  "username": "usuario",
  "password": "contraseña"
}
```

```json
{
  "token": "eyJhbGciOi..."
}
```


**`endpoints/get-users.md`**

```markdown
---
sidebar_position: 3
---

# GET /users

Obtiene la lista de usuarios.

**URL:** `/api/users`  
**Método:** GET  
**Headers:** `Authorization: Bearer <token>`

**Respuesta 200 OK:**
```json
[
  {
    "id": 1,
    "name": "Juan Perez",
    "email": "juan@ejemplo.com"
  }
]
