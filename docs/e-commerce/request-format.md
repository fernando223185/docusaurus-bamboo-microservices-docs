---
sidebar_position: 3
title: Request Format
---

# 📤 Request Format

## 📋 Create Order

### Endpoint

<span class="http-method post">POST</span>`/api/Orders`

### Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| X-API-Key | `{your-api-key}` | Yes | API Key for authentication |
| Content-Type | application/json | Yes | Request content type |

## 🚚 ShippingType Codes

Available codes for the `ShippingType` field:

| Code | Name | Description |
|------|------|-------------|
| CKLX007 | Ship to e-commerce platform | Send merchandise to the e-commerce platform |
| CKLX008 | Ship to customer on behalf of e-commerce platform | Ship to customer on behalf of the e-commerce platform |

## 🏢 Warehouses

Available warehouse IDs for the `WarehouseId` field:

| Warehouse ID | Code | Name |
|--------------|------|------|
| 1540425 | 80112 | TEMU-U43 |
| 1540519 | 10401 | E-comerce CDMX Almacen |
| 1540520 | 10402 | E-comerce GDL Almacen |
| 2095021 | 80114 | TEMU-N840 |
| 2119342 | 80115 | TEMU-GDL |

### Body Example

```json
{
  "CustomerCode": "CHH2A100706",
  "CustomerName": "MEGALUZ S.A. DE C.V.",
  "Remark": "string",
  "BillDate": "16/12/2025",
  "ShippingType": "0001",
  "Detail": [
    {
      "Code": "000002",
      "Name": "FREIDORA DE AIRE FDA08V",
      "Price": 550,
      "Quantity": 1,
      "WarehouseId": 1540416
    }
  ],
  "Guides": [
    {
      "Url": "https://translate.google.com.mx/?hl=es\u0026sl=es\u0026tl=en\u0026text=guia\u0026op=translate"
    },
    {
      "Url": "https://translate.google.com.mx/?hl=es\u0026sl=es\u0026tl=en\u0026text=guia\u0026op=translate"
    }
  ]
}
```

## ❌ Cancel Order

### Endpoint

<span class="http-method delete">DELETE</span>`/api/Orders/cancel/{orderId}?warehouseId={warehouseId}`

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
DELETE /api/Orders/cancel/12345?warehouseId=2 HTTP/1.1
Host: ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
X-API-Key: your-api-key-here
```
