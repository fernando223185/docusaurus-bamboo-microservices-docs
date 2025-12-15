---
sidebar_position: 4
title: Response Format
---

# 📥 Response Format

## 📋 Create Order Response

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

## ❌ Cancel Order Response

### ✅ Success – HTTP 200 OK

```json
{
  "success": true,
  "message": "Orden cancelada exitosamente",
  "data": {
    "orderId": 12345,
    "warehouseId": 2,
    "status": "Cancelled",
    "cancelledAt": "2025-12-13T14:30:25.123Z",
    "reason": "Customer requested cancellation"
  }
}
```

### 🛑 Validation Error – HTTP 400 Bad Request

```json
{
  "title": "one-more-validation-errors-occurred",
  "errors": {
    "OrderId": [
      "Order ID must be greater than 0"
    ],
    "WarehouseId": [
      "Warehouse ID is required"
    ]
  },
  "status": 400
}
```

### 💥 General Error – HTTP 400 Bad Request

```json
{
  "title": "Order not found or cannot be cancelled",
  "errors": [],
  "status": 400
}
```

### 🚫 Unauthorized – HTTP 401

```json
{
  "title": "Unauthorized access",
  "errors": [],
  "status": 401
}
```
