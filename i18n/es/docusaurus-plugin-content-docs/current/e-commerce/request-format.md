---
sidebar_position: 3
title: Formato de Solicitud
---

# 📤 Formato de Solicitud

## 📋 Crear Orden

### Endpoint

POST /api/StoreSale

### Headers

### Ejemplo del Cuerpo

```json
{
  "CustomerCode": "COD00011",
  "CustomerName": "Delta Corporate Inc.",
  "Remark": "Pedido solicitado para el departamento de TI.",
  "BillDate": "2025-12-01",
  "OrderDetails": [
    {
      "ProductId": 87,
      "Code": "NET-900",
      "Name": "Router Cisco RV340",
      "Price": 5250.99,
      "Quantity": 1,
      "Comentaries": "Empacar con papel burbuja y verificar el número de serie antes del envío.",
      "WarehouseId": 2
    }
  ]
}
```

## ❌ Cancelar Orden

### Endpoint

DELETE /api/storeorder/cancel/{orderId}?warehouseId={warehouseId}

### Parámetros

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| orderId | int | Ruta | Sí | El ID de la orden a cancelar |
| warehouseId | int | Query | Sí | El ID del almacén asociado con la orden |

### Headers

| Header | Valor | Requerido | Descripción |
|--------|-------|-----------|-------------|
| Authorization | Bearer {token} | Sí | Token de autenticación |

### Ejemplo de Solicitud

```http
DELETE /api/storeorder/cancel/12345?warehouseId=2 HTTP/1.1
Host: ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
Authorization: Bearer your-auth-token
```
