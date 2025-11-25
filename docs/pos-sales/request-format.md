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
  "id": 125,
  "folio": "FOL-20250623-003",
  "documentType": "Factura",
  "relatedDocument": "PED-345",
  "billDate": "2025-06-23T18:15:00.000Z",
  "quantity": 15,
  "subtotal": 111206.9,
  "discount": 6206.9,
  "total": 105000.0,
  "paymentMethodCode": "PM04",
  "branchCode": "BR005",
  "warehouseCode": "WH008",
  "commentary": "Compra empresarial con volumen",
  "customerCode": "CUST3003",
  "customerName": "Corporativo Global S.A.",
  "sellerCode": "SELLER07",
  "sellerName": "Ricardo Mendoza",
  "details": [
    {
      "productCode": "PRD1001",
      "productName": "Servidor Rack HP ProLiant DL380",
      "price": 34800.0,
      "measureUnit": "pieza",
      "quantity": 2,
      "discount": 1600.0,
      "amount": 68000.0
    },
    {
      "productCode": "PRD1002",
      "productName": "Switch Cisco Catalyst 48 Puertos",
      "price": 8700.0,
      "measureUnit": "pieza",
      "quantity": 3,
      "discount": 1806.9,
      "amount": 24893.1
    },
    {
      "productCode": "PRD1003",
      "productName": "UPS APC 5000VA Online",
      "price": 5600.0,
      "measureUnit": "pieza",
      "quantity": 5,
      "discount": 2800.0,
      "amount": 25000.0
    }
  ]
}
```
