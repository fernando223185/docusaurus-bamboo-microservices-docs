---
sidebar_position: 3
title: Request Format
---

# 📤 Request Format

## 📋 Create Order

### Endpoint

<span class="http-method post">POST</span>`/api/StoreSale`

### Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| X-API-Key | `{your-api-key}` | Yes | API Key for authentication |
| Content-Type | application/json | Yes | Request content type |

### Body Example

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

## ❌ Cancel Order

### Endpoint

<span class="http-method delete">DELETE</span>`/api/storeorder/cancel/{orderId}?warehouseId={warehouseId}`

### Parameters

| Parameter | Type | Location | Required | Description |
|-----------|------|----------|----------|-------------|
| orderId | int | Path | Yes | The ID of the order to cancel |
| warehouseId | int | Query | Yes | The warehouse ID associated with the order |

### Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| X-API-Key | `{your-api-key}` | Yes | API Key for authentication |
| Content-Type | application/json | Yes | Request content type |

### Example Request

```http
DELETE /api/storeorder/cancel/12345?warehouseId=2 HTTP/1.1
Host: ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
X-API-Key: your-api-key-here
```
