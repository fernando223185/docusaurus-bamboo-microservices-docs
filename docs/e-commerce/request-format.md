---
sidebar_position: 3
title: Request Format
---

# 📤 Request Format

## 📋 Create Order

### Endpoint

POST /api/StoreSale

### Headers

### Body Example

```json
{
  "CustomerCode": "COD00011",
  "CustomerName": "Delta Corporate Inc.",
  "Remark": "Order requested for the IT department.",
  "BillDate": "2025-12-01",
  "OrderDetails": [
    {
      "ProductId": 87,
      "Code": "NET-900",
      "Name": "Cisco Router RV340",
      "Price": 5250.99,
      "Quantity": 1,
      "Comentaries": "Pack with bubble wrap and verify the serial number before shipping.",
      "WarehouseId": 2
    }
  ]
}
```

## ❌ Cancel Order

### Endpoint

DELETE /api/storeorder/cancel/{orderId}?warehouseId={warehouseId}

### Parameters

| Parameter | Type | Location | Required | Description |
|-----------|------|----------|----------|-------------|
| orderId | int | Path | Yes | The ID of the order to cancel |
| warehouseId | int | Query | Yes | The warehouse ID associated with the order |

### Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| Authorization | Bearer {token} | Yes | Authentication token |

### Example Request

```http
DELETE /api/storeorder/cancel/12345?warehouseId=2 HTTP/1.1
Host: ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
Authorization: Bearer your-auth-token
```
