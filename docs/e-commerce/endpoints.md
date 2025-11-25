**`endpoints/get-users.md`**

````markdown
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
```
````
