---
sidebar_position: 2
title: Autenticación
---

# 🔐 Autenticación

Todas las solicitudes a la API de órdenes provenientes de e-Commerce requieren **autenticación** mediante una **Azure Function Key**.
Esta clave es proporcionada por el equipo de integración y debe mantenerse en secreto.

## Métodos para enviar la clave

### 1️⃣ Parámetro de consulta (Query Parameter)

Agrega la clave como un parámetro de consulta en tu solicitud a la API:

```txt
https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net/api/storeorder?code=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with the key provided.

### 2️⃣ Request Header

Alternativamente, puedes enviarla en el encabezado de la solicitud (request header):

```http
POST /api/storeorder HTTP/1.1
Host: mercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
x-functions-key: YOUR_API_KEY
Content-Type: application/json
```

### Notas

- Las solicitudes sin una clave válida devolverán **HTTP 401 Unauthorized**.
- **No compartas** tu clave públicamente. Esta otorga acceso completo a la API.

## Ejemplo de Solicitud

```bash
curl -X POST "https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net/api/storeorder?code=YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{"Folio":"A123","Quantity":10,"Subtotal":100.0}'
```

O Usando **JavaScript fetch**:

```javascript
fetch(
  'https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net/api/storeorder',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-functions-key': 'YOUR_API_KEY',
    },
    body: JSON.stringify({ Folio: 'A123', Quantity: 10, Subtotal: 100.0 }),
  }
)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error)
```

## Errores comunes

| HTTP Code        | Reason                                           |
| ---------------- | ------------------------------------------------ |
| 401 Unauthorized | Missing or invalid API key                       |
| 403 Forbidden    | Key exists but lacks permission for the endpoint |

## FAQs

**P1: ¿Dónde obtengo la Azure Function Key?**
La clave es proporcionada por el equipo de integración. Asegúrate de almacenarla de forma segura y evita exponerla en logs, URLs o repositorios públicos.

**P2: ¿Puedo enviar la clave tanto en el header como en el query al mismo tiempo?**
Sí. Puedes enviar la clave ya sea en el header o en el query string.
Enviar ambas es válido, pero no cambia el comportamiento: con una sola es suficiente.

**P3: ¿Qué ocurre si la clave es inválida?**
Si la clave enviada es incorrecta, falta, está expirada o fue revocada, la API responderá con 401 Unauthorized, y la solicitud no será procesada.
