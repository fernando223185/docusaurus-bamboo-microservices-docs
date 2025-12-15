---
sidebar_position: 4
title: Formato de Respuesta
---

# 📥 Formato de Respuesta

## 📋 Respuesta de Crear Orden

### ✅ Éxito – HTTP 200 OK

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

## ❌ Respuesta de Cancelar Orden

### ✅ Éxito – HTTP 200 OK

```json
{
  "success": true,
  "message": "Orden cancelada exitosamente",
  "data": {
    "orderId": 12345,
    "warehouseId": 2,
    "status": "Cancelled",
    "cancelledAt": "2025-12-13T14:30:25.123Z",
    "reason": "Cliente solicitó cancelación"
  }
}
```

### 🛑 Error de Validación – HTTP 400 Bad Request

```json
{
  "title": "one-more-validation-errors-occurred",
  "errors": {
    "OrderId": [
      "El ID de la orden debe ser mayor que 0"
    ],
    "WarehouseId": [
      "El ID del almacén es requerido"
    ]
  },
  "status": 400
}
```

### 💥 Error General – HTTP 400 Bad Request

```json
{
  "title": "Orden no encontrada o no se puede cancelar",
  "errors": [],
  "status": 400
}
```

### 🚫 No Autorizado – HTTP 401

```json
{
  "title": "Acceso no autorizado",
  "errors": [],
  "status": 401
}
```
