---
sidebar_position: 5
title: Examples
---

import UrlUpdateAlert from '@site/src/components/UrlUpdateAlert';

<UrlUpdateAlert />

# ✨ Examples

## 📋 Create Order Examples

### C# (HttpClient)

```csharp
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public async Task CallApiAsync()
{
    var client = new HttpClient();
    var url = "http://bambootesting.ddns.net:5000/api/Orders";

    var payload = new
    {
        customerCode = "CUST001",
        customerName = "Tech Solutions Inc.",
        remark = "Sample ecommerce order",
        billDate = "2026-01-15T10:30:00",
        ShippingType = "CKLX008",
        externalId = "ORD-2026-001",
        dispatchWarehouse = "CDMX",
        detail = new[]
        {
            new
            {
                code = "PROD001",
                name = "Wireless Mouse",
                price = 29.99,
                quantity = 5,
                warehouseId = 1540519,
                remark = "Standard delivery"
            },
            new
            {
                code = "PROD002",
                name = "USB-C Cable 2m",
                price = 12.50,
                quantity = 10,
                warehouseId = 1540519,
                remark = "Express shipping"
            },
            new
            {
                code = "PROD003",
                name = "Laptop Stand",
                price = 45.00,
                quantity = 3,
                warehouseId = 1540520,
                remark = "Gift wrap requested"
            }
        }
    };

    var json = JsonConvert.SerializeObject(payload);
    var content = new StringContent(json, Encoding.UTF8, "application/json");

    // Agregar la clave API en el header
    client.DefaultRequestHeaders.Add("X-API-Key", "your-api-key-here");

    var response = await client.PostAsync(url, content);
    var responseString = await response.Content.ReadAsStringAsync();

    Console.WriteLine(responseString);
}
```

### Javascript

```javascript
async function callAzureFunction() {
  const url = 'http://bambootesting.ddns.net:5000/api/Orders'

  const payload = {
    customerCode: 'CUST001',
    customerName: 'Tech Solutions Inc.',
    remark: 'Sample ecommerce order',
    billDate: '2026-01-15T10:30:00',
    ShippingType: 'CKLX008',
    externalId: 'ORD-2026-001',
    dispatchWarehouse: 'CDMX',
    detail: [
      {
        code: 'PROD001',
        name: 'Wireless Mouse',
        price: 29.99,
        quantity: 5,
        warehouseId: 1540519,
        remark: 'Standard delivery',
      },
      {
        code: 'PROD002',
        name: 'USB-C Cable 2m',
        price: 12.50,
        quantity: 10,
        warehouseId: 1540519,
        remark: 'Express shipping',
      },
      {
        code: 'PROD003',
        name: 'Laptop Stand',
        price: 45.00,
        quantity: 3,
        warehouseId: 1540520,
        remark: 'Gift wrap requested',
      },
    ],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'your-api-key-here',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Error:', error)
    return
  }

  const data = await response.json()
  console.log('Response:', data)
}

callAzureFunction()
```

### TypeScript

```typeScript
interface DetailItem {
  Code: string;
  Name: string;
  Price: number;
  Quantity: number;
  WarehouseId: number;
}

interface GuideItem {
  Url: string;
}

interface SalePayload {
  CustomerCode: string;
  CustomerName: string;
  Remark: string;
  BillDate: string;
  ShippingType: string;
  externalId: string;
  Detail: DetailItem[];
  Guides: GuideItem[];
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errors?: { field: string; message: string }[];
  message?: string;
}

async function callAzureFunction(payload: SalePayload): Promise<void> {
  const url = "http://bambootesting.ddns.net:5000/api/Orders";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "your-api-key-here",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error:", errorText);
    return;
  }

  const result: ApiResponse<any> = await response.json();
  if (result.success) {
    console.log("Success:", result.data);
  } else {
    console.error("Errors:", result.errors);
  }
}

const payload: SalePayload = {
    CustomerCode: "CUST001",
    CustomerName: "Tech Solutions Inc.",
    Remark: "Sample ecommerce order",
    BillDate: "2026-01-15T10:30:00",
    ShippingType: "CKLX008",
    externalId: "ORD-2026-001",
    dispatchWarehouse: "CDMX",
    Detail: [
        {
            Code: "PROD001",
            Name: "Wireless Mouse",
            Price: 29.99,
            Quantity: 5,
            WarehouseId: 1540519
        },
        {
            Code: "PROD002",
            Name: "USB-C Cable 2m",
            Price: 12.50,
            Quantity: 10,
            WarehouseId: 1540519
        },
        {
            Code: "PROD003",
            Name: "Laptop Stand",
            Price: 45.00,
            Quantity: 3,
            WarehouseId: 1540520
        }
    ],
    Guides: [
        { Url: "https://example.com/tracking/guide1" },
        { Url: "https://example.com/tracking/guide2" }
    ]
};

callAzureFunction(payload);

```

### PHP (CURL)

```php
<?php

$url = "http://bambootesting.ddns.net:5000/api/Orders";
$apiKey = "your-api-key-here";

$data = [
    "CustomerCode" => "CUST001",
    "CustomerName" => "Tech Solutions Inc.",
    "Remark" => "Sample ecommerce order",
    "BillDate" => "2026-01-15T10:30:00",
    "ShippingType" => "CKLX008",
    "externalId" => "ORD-2026-001",
    "dispatchWarehouse" => "CDMX",
    "Detail" => [
        [
            "Code" => "PROD001",
            "Name" => "Wireless Mouse",
            "Price" => 29.99,
            "Quantity" => 5,
            "WarehouseId" => 1540519
        ],
        [
            "Code" => "PROD002",
            "Name" => "USB-C Cable 2m",
            "Price" => 12.50,
            "Quantity" => 10,
            "WarehouseId" => 1540519
        ],
        [
            "Code" => "PROD003",
            "Name" => "Laptop Stand",
            "Price" => 45.00,
            "Quantity" => 3,
            "WarehouseId" => 1540520
        ]
    ],
    "Guides" => [
        ["Url" => "https://example.com/tracking/guide1"],
        ["Url" => "https://example.com/tracking/guide2"]
    ]
];

$payload = json_encode($data);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-API-Key: ' . $apiKey
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error en la petición: ' . curl_error($ch);
} else {
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "HTTP Code: $httpCode\n";
    echo "Response: $response\n";
}

curl_close($ch);

```

## ❌ Cancel Order Examples

### C# (HttpClient)

```csharp
using System.Net.Http;
using System.Threading.Tasks;

public async Task CancelOrderAsync()
{
    var client = new HttpClient();
    var baseUrl = "http://bambootesting.ddns.net:5000";
    var orderId = 12345;
    var warehouseId = 2;
    var url = $"{baseUrl}/api/storeorder/cancel/{orderId}?warehouseId={warehouseId}";

    // Add API Key header
    client.DefaultRequestHeaders.Add("X-API-Key", "your-api-key-here");

    var response = await client.DeleteAsync(url);
    var responseString = await response.Content.ReadAsStringAsync();

    if (response.IsSuccessStatusCode)
    {
        Console.WriteLine("Order cancelled successfully:");
        Console.WriteLine(responseString);
    }
    else
    {
        Console.WriteLine("Error cancelling order:");
        Console.WriteLine(responseString);
    }
}
```

### JavaScript

```javascript
async function cancelOrder() {
  const baseUrl = 'http://bambootesting.ddns.net:5000'
  const orderId = 12345
  const warehouseId = 2
  const url = `${baseUrl}/api/storeorder/cancel/${orderId}?warehouseId=${warehouseId}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-API-Key': 'your-api-key-here',
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Error:', error)
      return
    }

    const data = await response.json()
    console.log('Order cancelled successfully:', data)
  } catch (error) {
    console.error('Network error:', error)
  }
}

cancelOrder()
```

### TypeScript

```typescript
interface CancelOrderResponse {
  success: boolean;
  message: string;
  data: {
    orderId: number;
    warehouseId: number;
    status: string;
    cancelledAt: string;
    reason: string;
  };
}

interface ApiErrorResponse {
  title: string;
  errors: Record<string, string[]> | string[];
  status: number;
}

async function cancelOrder(orderId: number, warehouseId: number): Promise<void> {
  const baseUrl = "http://bambootesting.ddns.net:5000";
  const url = `${baseUrl}/api/storeorder/cancel/${orderId}?warehouseId=${warehouseId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "X-API-Key": "your-api-key-here",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResult: ApiErrorResponse = await response.json();
      console.error("API Error:", errorResult);
      return;
    }

    const result: CancelOrderResponse = await response.json();
    if (result.success) {
      console.log("Order cancelled successfully:", result.data);
    } else {
      console.error("Cancellation failed:", result.message);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

// Usage example
cancelOrder(12345, 2);
```

### PHP (CURL)

```php
<?php

$baseUrl = "http://bambootesting.ddns.net:5000";
$orderId = 12345;
$warehouseId = 2;
$url = "{$baseUrl}/api/storeorder/cancel/{$orderId}?warehouseId={$warehouseId}";

$apiKey = "your-api-key-here";

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-API-Key: ' . $apiKey
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error en la petición: ' . curl_error($ch);
} else {
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "HTTP Code: $httpCode\n";
    
    if ($httpCode === 200) {
        $data = json_decode($response, true);
        if ($data['success']) {
            echo "Orden cancelada exitosamente:\n";
            echo "Order ID: " . $data['data']['orderId'] . "\n";
            echo "Status: " . $data['data']['status'] . "\n";
            echo "Cancelled At: " . $data['data']['cancelledAt'] . "\n";
        }
    } else {
        echo "Error: $response\n";
    }
}

curl_close($ch);
?>
```
