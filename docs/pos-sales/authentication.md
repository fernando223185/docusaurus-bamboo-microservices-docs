---
sidebar_position: 2
title: Authentication
---

# 🔐 Authentication

All API requests to the POS Sales Microservice require **authentication** using an **Azure Function Key**.
This key is provided by the integration team and must be kept secret.

## Methods to send the key

### 1️⃣ Query Parameter

Add the key as a query parameter in your API request:

```txt
https://funckingdeestoresalespos.azurewebsites.net/api/StoreSale?code=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with the key provided.

### 2️⃣ Request Header

Alternatively, you can send it in the request header:

```http
POST /api/StoreSale HTTP/1.1
Host: funckingdeestoresalespos.azurewebsites.net
x-functions-key: YOUR_API_KEY
Content-Type: application/json
```

### Notes

- Requests without a valid key will return **HTTP 401 Unauthorized**.
- Do **not share** your key publicly. It grants full access to the API.

## Example Request

```bash
curl -X POST "https://funckingdeestoresalespos.azurewebsites.net/api/StoreSale?code=YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{"Folio":"A123","Quantity":10,"Subtotal":100.0}'
```

Or using **JavaScript fetch**:

```javascript
fetch('https://funckingdeestoresalespos.azurewebsites.net/api/StoreSale', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-functions-key': 'YOUR_API_KEY',
  },
  body: JSON.stringify({ Folio: 'A123', Quantity: 10, Subtotal: 100.0 }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error)
```

## Common Errors

| HTTP Code        | Reason                                           |
| ---------------- | ------------------------------------------------ |
| 401 Unauthorized | Missing or invalid API key                       |
| 403 Forbidden    | Key exists but lacks permission for the endpoint |

## FAQs

**Q1: Where do I get the Azure Function Key?**
It is provided by the integration team. Keep it secure.

**Q2: Can I send the key both in header and query at the same time?**
Yes, but only one is necessary. Sending both does not change behavior.

**Q3: What happens if the key is invalid?**
You will receive a **401 Unauthorized** response and the request will not be processed.
