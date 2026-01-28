---
sidebar_position: 3
title: Request Format
---

import UrlUpdateAlert from '@site/src/components/UrlUpdateAlert';

<UrlUpdateAlert />

#  Request Format

##  Create Order

### Endpoint

<span class="http-method post">POST</span>`/api/Orders`

### Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| X-API-Key | `{your-api-key}` | Yes | API Key for authentication |
| Content-Type | application/json | Yes | Request content type |

### Required Fields

- **`externalId`**: External reference ID from your system (required). This allows you to send your own sale folio/reference number.

##  ShippingType Codes

Available codes for the `ShippingType` field:

| Code | Name | Description |
|------|------|-------------|
| CKLX007 | Ship to e-commerce platform | Send merchandise to the e-commerce platform |
| CKLX008 | Ship to customer on behalf of e-commerce platform | Ship to customer on behalf of the e-commerce platform |

##  Dispatch Warehouse Codes

Available codes for the `dispatchWarehouse` field:

| Code | Description |
|------|-------------|
| CDMX | Mexico City dispatch warehouse |
| GDL | Guadalajara dispatch warehouse |

**Note:** This field only accepts `CDMX` or `GDL` as valid values.

##  Warehouses

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
  "customerCode": "CUST001",
  "customerName": "Tech Solutions Inc.",
  "remark": "Sample ecommerce order",
  "billDate": "2026-01-15T10:30:00",
  "ShippingType": "CKLX008",
  "externalId": "ORD-2026-001",
  "dispatchWarehouse": "CDMX",
  "detail": [
    {
      "code": "PROD001",
      "name": "Wireless Mouse",
      "price": 29.99,
      "quantity": 5,
      "warehouseId": 1540519,
      "remark": "Standard delivery"
    },
    {
      "code": "PROD002",
      "name": "USB-C Cable 2m",
      "price": 12.50,
      "quantity": 10,
      "warehouseId": 1540519,
      "remark": "Express shipping"
    },
    {
      "code": "PROD003",
      "name": "Laptop Stand",
      "price": 45.00,
      "quantity": 3,
      "warehouseId": 1540520,
      "remark": "Gift wrap requested"
    }
  ],
  "guides": [
    {
      "url": "https://example.com/guide/track123"
    }
  ]
}
```

##  Cancel Order

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
