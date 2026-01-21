---
sidebar_position: 2
title: Authentication
---

# 🔐 Authentication

All API requests to the orders from e-Commerce require **authentication** using an **API Key**.
This key is provided by the integration team and must be kept secret.

## How to send the API Key

### Request Header

Send the API key in the request header:

```http
POST /api/Orders HTTP/1.1
Host: bambootesting.ddns.net:5000
X-API-Key: YOUR_API_KEY
Content-Type: application/json
```

### Notes

- **The `X-API-Key` header is required for EVERY request** to the API.
- Requests without a valid key will return **HTTP 401 Unauthorized**.
- Do **not share** your key publicly. It grants full access to the API.
- The API expects **PascalCase** field names in the request body (e.g., `CustomerCode`, `ShippingType`, `Detail`).

## Example Request

```bash
curl -X POST "http://bambootesting.ddns.net:5000/api/Orders" \
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY_HERE" \
-d '{
  "CustomerCode": "CUST001",
  "CustomerName": "Tech Solutions Inc.",
  "Remark": "Sample API documentation order",
  "BillDate": "2026-01-15T10:30:00",
  "ShippingType": "CKLX008",
  "externalId": "ORD-2026-001",
  "Detail": [
    {
      "Code": "PROD001",
      "Name": "Wireless Mouse",
      "Price": 29.99,
      "Quantity": 5,
      "WarehouseId": 1540519
    }
  ],
  "Guides": [
    {
      "Url": "https://example.com/tracking/guide1"
    },
    {
      "Url": "https://example.com/tracking/guide2"
    }
  ]
}'
```

Or using **JavaScript fetch**:

```javascript
fetch(
  'http://bambootesting.ddns.net:5000/api/Orders',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY_HERE',
    },
    body: JSON.stringify({
      CustomerCode: 'CUST001',
      CustomerName: 'Tech Solutions Inc.',
      Remark: 'Sample API documentation order',
      BillDate: '2026-01-15T10:30:00',
      ShippingType: 'CKLX008',
      externalId: 'ORD-2026-001',
      Detail: [
        {
          Code: 'PROD001',
          Name: 'Wireless Mouse',
          Price: 29.99,
          Quantity: 5,
          WarehouseId: 1540519
        }
      ],
      Guides: [
        {
          Url: 'https://example.com/tracking/guide1'
        },
        {
          Url: 'https://example.com/tracking/guide2'
        }
      ]
    }),
  }
)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error)
```

## Common Errors

| HTTP Code        | Reason                                           |
| ---------------- | ------------------------------------------------ |
| 401 Unauthorized | Missing or invalid API key                       |
| 403 Forbidden    | Key exists but lacks permission for the endpoint |

## FAQs

**Q1: Where do I get the API Key?**
It is provided by the integration team. Make sure to store it securely and avoid exposing it in logs, URLs or public repositories.

**Q2: Is the X-API-Key header the only way to authenticate?**
Yes, the X-API-Key header is the standard and only supported method for API authentication.

**Q3: What happens if the key is invalid?**
You will receive a **401 Unauthorized** response and the request will not be processed.
