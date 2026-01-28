---
sidebar_position: 5
title: Ejemplos
---

import UrlUpdateAlertEs from '@site/src/components/UrlUpdateAlertEs';

<UrlUpdateAlertEs />

# ✨ Ejemplos

## 📋 Ejemplos de Crear Orden

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
        CustomerCode = "CUST001",
        CustomerName = "Tech Solutions Inc.",
        Remark = "Pedido de muestra para ecommerce",
        BillDate = "2026-01-15T10:30:00",
        ShippingType = "CKLX008",
        externalId = "ORD-2026-001",
        dispatchWarehouse = "CDMX",
        Detail = new[]
        {
            new
            {
                Code = "PROD001",
                Name = "Mouse Inalámbrico",
                Price = 29.99,
                Quantity = 5,
                WarehouseId = 1540519
            },
            new
            {
                Code = "PROD002",
                Name = "Cable USB-C 2m",
                Price = 12.50,
                Quantity = 10,
                WarehouseId = 1540519
            },
            new
            {
                Code = "PROD003",
                Name = "Soporte para Laptop",
                Price = 45.00,
                Quantity = 3,
                WarehouseId = 1540520
            }
        },
        Guides = new[]
        {
            new { Url = "https://ejemplo.com/rastreo/guia1" },
            new { Url = "https://ejemplo.com/rastreo/guia2" }
        }
    };

    var json = JsonConvert.SerializeObject(payload);
    var content = new StringContent(json, Encoding.UTF8, "application/json");

    // Agregar la clave API en el header
    client.DefaultRequestHeaders.Add("X-API-Key", "tu-clave-api-aqui");

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
    CustomerCode: 'CUST001',
    CustomerName: 'Tech Solutions Inc.',
    Remark: 'Pedido de muestra para ecommerce',
    BillDate: '2026-01-15T10:30:00',
    ShippingType: 'CKLX008',
    externalId: 'ORD-2026-001',
    dispatchWarehouse: 'CDMX',
    Detail: [
      {
        Code: 'PROD001',
        Name: 'Mouse Inalámbrico',
        Price: 29.99,
        Quantity: 5,
        WarehouseId: 1540519,
      },
      {
        Code: 'PROD002',
        Name: 'Cable USB-C 2m',
        Price: 12.50,
        Quantity: 10,
        WarehouseId: 1540519,
      },
      {
        Code: 'PROD003',
        Name: 'Soporte para Laptop',
        Price: 45.00,
        Quantity: 3,
        WarehouseId: 1540520,
      },
    ],
    Guides: [
      { Url: 'https://ejemplo.com/rastreo/guia1' },
      { Url: 'https://ejemplo.com/rastreo/guia2' }
    ]
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'tu-clave-api-aqui',
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
      "X-API-Key": "tu-clave-api-aqui",
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
    Remark: "Pedido de muestra para ecommerce",
    BillDate: "2026-01-15T10:30:00",
    ShippingType: "CKLX008",
    externalId: "ORD-2026-001",
    dispatchWarehouse: "CDMX",
    Detail: [
        {
            Code: "PROD001",
            Name: "Mouse Inalámbrico",
            Price: 29.99,
            Quantity: 5,
            WarehouseId: 1540519
        },
        {
            Code: "PROD002",
            Name: "Cable USB-C 2m",
            Price: 12.50,
            Quantity: 10,
            WarehouseId: 1540519
        },
        {
            Code: "PROD003",
            Name: "Soporte para Laptop",
            Price: 45.00,
            Quantity: 3,
            WarehouseId: 1540520
        }
    ],
    Guides: [
        { Url: "https://ejemplo.com/rastreo/guia1" },
        { Url: "https://ejemplo.com/rastreo/guia2" }
    ]
};

callAzureFunction(payload);

```

### PHP (CURL)

```php
<?php

$url = "http://bambootesting.ddns.net:5000/api/Orders";
$apiKey = "tu-clave-api-aqui";

$data = [
    "CustomerCode" => "CUST001",
    "CustomerName" => "Tech Solutions Inc.",
    "Remark" => "Pedido de muestra para ecommerce",
    "BillDate" => "2026-01-15T10:30:00",
    "ShippingType" => "CKLX008",
    "externalId" => "ORD-2026-001",
    "dispatchWarehouse" => "CDMX",
    "Detail" => [
        [
            "Code" => "PROD001",
            "Name" => "Mouse Inalámbrico",
            "Price" => 29.99,
            "Quantity" => 5,
            "WarehouseId" => 1540519
        ],
        [
            "Code" => "PROD002",
            "Name" => "Cable USB-C 2m",
            "Price" => 12.50,
            "Quantity" => 10,
            "WarehouseId" => 1540519
        ],
        [
            "Code" => "PROD003",
            "Name" => "Soporte para Laptop",
            "Price" => 45.00,
            "Quantity" => 3,
            "WarehouseId" => 1540520
        ]
    ],
    "Guides" => [
        ["Url" => "https://ejemplo.com/rastreo/guia1"],
        ["Url" => "https://ejemplo.com/rastreo/guia2"]
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

## ❌ Ejemplos de Cancelar Orden

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
    var url = $"{baseUrl}/api/Orders/cancel/{orderId}?warehouseId={warehouseId}";

    // Agregar header de clave API
    client.DefaultRequestHeaders.Add("X-API-Key", "tu-clave-api-aqui");

    var response = await client.DeleteAsync(url);
    var responseString = await response.Content.ReadAsStringAsync();

    if (response.IsSuccessStatusCode)
    {
        Console.WriteLine("Orden cancelada exitosamente:");
        Console.WriteLine(responseString);
    }
    else
    {
        Console.WriteLine("Error cancelando la orden:");
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
  const url = `${baseUrl}/api/Orders/cancel/${orderId}?warehouseId=${warehouseId}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-API-Key': 'tu-clave-api-aqui',
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Error:', error)
      return
    }

    const data = await response.json()
    console.log('Orden cancelada exitosamente:', data)
  } catch (error) {
    console.error('Error de red:', error)
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
  const url = `${baseUrl}/api/Orders/cancel/${orderId}?warehouseId=${warehouseId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "X-API-Key": "tu-clave-api-aqui",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResult: ApiErrorResponse = await response.json();
      console.error("Error de API:", errorResult);
      return;
    }

    const result: CancelOrderResponse = await response.json();
    if (result.success) {
      console.log("Orden cancelada exitosamente:", result.data);
    } else {
      console.error("Cancelación falló:", result.message);
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
}

// Ejemplo de uso
cancelOrder(12345, 2);
```

### PHP (CURL)

```php
<?php

$baseUrl = "http://bambootesting.ddns.net:5000";
$orderId = 12345;
$warehouseId = 2;
$url = "{$baseUrl}/api/Orders/cancel/{$orderId}?warehouseId={$warehouseId}";

$apiKey = "tu-clave-api-aqui";

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
            echo "Cancelada en: " . $data['data']['cancelledAt'] . "\n";
        }
    } else {
        echo "Error: $response\n";
    }
}

curl_close($ch);
?>
```
