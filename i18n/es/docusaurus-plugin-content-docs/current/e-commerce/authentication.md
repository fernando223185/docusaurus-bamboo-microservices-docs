---
sidebar_position: 2
title: Autenticación
---

# 🔐 Autenticación

Todas las solicitudes a la API de órdenes provenientes de e-Commerce requieren **autenticación** mediante una **clave API**.
Esta clave es proporcionada por el equipo de integración y debe mantenerse en secreto.

## Cómo enviar la clave API

### Request Header

Envía la clave API en el encabezado de la solicitud:

```http
POST /api/Orders HTTP/1.1
Host: bambootesting.ddns.net:5000
X-API-Key: YOUR_API_KEY
Content-Type: application/json
```

### Notas

- **El header `X-API-Key` es requerido en CADA petición** a la API.
- Las solicitudes sin una clave válida devolverán **HTTP 401 Unauthorized**.
- **No compartas** tu clave públicamente. Esta otorga acceso completo a la API.
- La API espera nombres de campos en **PascalCase** en el body (ej. `CustomerCode`, `ShippingType`, `Detail`).

## Ejemplo de Solicitud

```bash
curl -X POST "http://bambootesting.ddns.net:5000/api/Orders" \
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY_HERE" \
-d '{
  "CustomerCode": "CUST001",
  "CustomerName": "Tech Solutions Inc.",
  "Remark": "prueba de documentaci\u00f3n API",
  "BillDate": "2026-01-15T10:30:00",
  "ShippingType": "CKLX008",
  "externalId": "ORD-2026-001",
  "Detail": [
    {
      "Code": "PROD001",
      "Name": "Mouse Inalámbrico",
      "Price": 550,
      "Quantity": 1,
      "WarehouseId": 1540519
    }
  ],
  "Guides": [
    {
      "Url": "https://ejemplo.com/rastreo/guia1"
    },
    {
      "Url": "https://ejemplo.com/rastreo/guia2"
    }
  ]
}'
```

O Usando **JavaScript fetch**:

```javascript
fetch(
  'http://bambootesting.ddns.net:5000/api/Orders',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY_HERE',
    },
    body: JSON.stringify({
      CustomerCode: 'CUST001',
      CustomerName: 'Tech Solutions Inc.',
      Remark: 'prueba de documentaci\u00f3n API',
      BillDate: '2026-01-15T10:30:00',
      ShippingType: 'CKLX008',
      externalId: 'ORD-2026-001',
      Detail: [
        {
          Code: 'PROD001',
          Name: 'Mouse Inalámbrico',
          Price: 550,
          Quantity: 1,
          WarehouseId: 1540519
        }
      ],
      Guides: [
        {
          Url: 'https://ejemplo.com/rastreo/guia1'
        },
        {
          Url: 'https://ejemplo.com/rastreo/guia1'
        }
      ]
    }),
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

**P1: ¿Dónde obtengo la clave API?**
La clave es proporcionada por el equipo de integración. Asegúrate de almacenarla de forma segura y evita exponerla en logs, URLs o repositorios públicos.

**P2: ¿Es el header X-API-Key la única forma de autenticarse?**
Sí, el header X-API-Key es el método estándar y único soportado para la autenticación de la API.

**P3: ¿Qué ocurre si la clave es inválida?**
Si la clave enviada es incorrecta, falta, está expirada o fue revocada, la API responderá con 401 Unauthorized, y la solicitud no será procesada.

