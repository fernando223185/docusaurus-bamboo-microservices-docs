---
sidebar_position: 3
title: Formato de Solicitud
---

# 📤 Formato de Solicitud

## 📋 Crear Orden

### Endpoint

POST /api/StoreSale

### Headers

| Header | Valor | Requerido | Descripción |
|--------|-------|-----------|-------------|
| X-API-Key | `{tu-api-key}` | Sí | Clave API para autenticación |
| Content-Type | application/json | Sí | Tipo de contenido de la solicitud |

### Ejemplo del Cuerpo

```json
{
  "customerCode": "CHH2A100706",
  "customerName": "MEGALUZ S.A. DE C.V.",
  "remark": "Pedido prueba Ecommerce",
  "billDate": "2025-11-10T13:45:00",
  "detail": [
    {
      "code": "000002",
      "name": "FREIDORA DE AIRE FDA08V",
      "price": 550,
      "quantity": 100,
      "warehouseId": 1540416
    },
    {
      "code": "000005",
      "name": "FREIDORA DE AIRE FDA09A",
      "price": 380,
      "quantity": 200,
      "warehouseId": 1540416
    }
  ]
}
```

## ❌ Cancelar Orden

### Endpoint

DELETE /api/storeorder/cancel/`{orderId}`?warehouseId=`{warehouseId}`

### Parámetros

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| orderId | int | Ruta | Sí | El ID de la orden a cancelar |
| warehouseId | int | Query | Sí | El ID del almacén asociado con la orden |

### Headers

| Header | Valor | Requerido | Descripción |
|--------|-------|-----------|-------------|
| X-API-Key | `{tu-api-key}` | Sí | Clave API para autenticación |
| Content-Type | application/json | Sí | Tipo de contenido de la solicitud |

### Ejemplo de Solicitud

```http
DELETE /api/storeorder/cancel/12345?warehouseId=2 HTTP/1.1
Host: ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
X-API-Key: tu-clave-api-aqui
```
