---
sidebar_position: 4
title: Response Format
---

# 📥 Response Format

### ✅ Success – HTTP 200 OK

```json
{
    "success": true,
    "data": { ... },
    "errors": null,
    "message": "Orden almacenada correctamente"
}
```

🛑 Error – HTTP 400

```json
{
  "success": false,
  "data": null,
  "errors": [
    {
      "field": "CustomerCode",
      "message": "'Customer Code' must not be empty."
    },
    { "field": "BillDate", "message": "Bill Date cannot be empty" }
  ],
  "message": "Validation failed"
}
```

🚫 Error – HTTP 401

Unauthorized: missing or invalid x-functions-key.

💥 Error – HTTP 500

```json
{
  "success": false,
  "data": null,
  "errors": [
    {
      "field": "Exception",
      "message": "Could not convert string to decimal: 95.50A."
    }
  ],
  "message": "Error interno del servidor"
}
```
