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
    "message": "Venta procesada correctamente"
}
```

🛑 Error – HTTP 400

```json
{
  "success": false,
  "data": null,
  "errors": [
    {
      "field": "PaymentMethodCode",
      "message": "'Payment Method Code' must not be empty."
    },
    { "field": "BranchCode", "message": "Branch Code cannot be empty" },
    { "field": "WarehouseCode", "message": "Warehouse Code cannot be empty" }
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
