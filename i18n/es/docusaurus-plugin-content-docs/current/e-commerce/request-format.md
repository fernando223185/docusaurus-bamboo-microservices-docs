---
sidebar_position: 3
title: Request Format
---

# 📤 Request Format

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
