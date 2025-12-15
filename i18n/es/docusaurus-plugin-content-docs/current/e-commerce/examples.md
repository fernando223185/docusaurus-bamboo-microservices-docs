---
sidebar_position: 5
title: Ejemplos
---

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
    var url = "https://tuapp.azurewebsites.net/api/sales";

    var payload = new
    {
        CustomerCode: "COD00011",
        CustomerName: "Corporativo Delta SA de CV",
        Remark: "Pedido solicitado para área de TI.",
        BillDate: "2025-12-01",
        OrderDetails: [
            {
                ProductId: 87,
                Code: "NET-900",
                Name: "Router Cisco RV340",
                Price: 5250.99,
                Quantity: 1,
                Comentaries:"Hello World" ,
                WarehouseId: 2
            }
        ]
    };

    var json = JsonConvert.SerializeObject(payload);
    var content = new StringContent(json, Encoding.UTF8, "application/json");

    // Agregar la clave en el header
    client.DefaultRequestHeaders.Add("x-functions-key", "miClaveSecreta123");

    var response = await client.PostAsync(url, content);
    var responseString = await response.Content.ReadAsStringAsync();

    Console.WriteLine(responseString);
}
```

### Javascript

```javascript
async function callAzureFunction() {
  const url = 'https://tuapp.azurewebsites.net/api/sales'

  const payload = {
    CustomerCode: 'COD00011',
    CustomerName: 'Corporativo Delta SA de CV',
    Remark: 'Pedido solicitado para área de TI.',
    BillDate: '2025-12-01',
    OrderDetails: [
      {
        ProductId: 87,
        Code: 'NET-900',
        Name: 'Router Cisco RV340',
        Price: 5250.99,
        Quantity: 1,
        Comentaries: 'Hello World',
        WarehouseId: 2,
      },
    ],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-functions-key': 'miClaveSecreta123',
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
interface SalePayload {
  Folio: string;
  Quantity: number;
  Subtotal: number;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errors?: { field: string; message: string }[];
  message?: string;
}

async function callAzureFunction(payload: SalePayload): Promise<void> {
  const url = "https://tuapp.azurewebsites.net/api/sales";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-functions-key": "miClaveSecreta123",
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
    CustomerCode: "COD00011",
    CustomerName: "Corporativo Delta SA de CV",
    Remark: "Pedido solicitado para área de TI.",
    BillDate: "2025-12-01",
    OrderDetails: [
        {
            ProductId: 87,
            Code: "NET-900",
            Name: "Router Cisco RV340",
            Price: 5250.99,
            Quantity: 1,
            Comentaries:"Hello World" ,
            WarehouseId: 2
        }
    ]
};

callAzureFunction(payload);

```

### PHP (CURL)

```php
<?php

$url = "https://tuapp.azurewebsites.net/api/sales";
$functionKey = "miClaveSecreta123";

$data = [
    "CustomerCode" => "COD00011",
    "CustomerName" => "Corporativo Delta SA de CV",
    "Remark" => "Pedido solicitado para área de TI.",
    "BillDate" => "2025-12-01",
    "OrderDetails"=> [
        "ProductId"=> 87,
        "Code"=> "NET-900",
        "Name"=> "Router Cisco RV340",
        "Price"=> 5250.99,
        "Quantity"=> 1,
        "Comentaries"=>"Hello World" ,
        "WarehouseId"=> 2
    ]
];

$payload = json_encode($data);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-functions-key: ' . $functionKey
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
    var baseUrl = "https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net";
    var orderId = 12345;
    var warehouseId = 2;
    var url = $"{baseUrl}/api/storeorder/cancel/{orderId}?warehouseId={warehouseId}";

    // Agregar header de autenticación
    client.DefaultRequestHeaders.Add("Authorization", "Bearer your-auth-token");

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
  const baseUrl = 'https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net'
  const orderId = 12345
  const warehouseId = 2
  const url = `${baseUrl}/api/storeorder/cancel/${orderId}?warehouseId=${warehouseId}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer your-auth-token',
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
  const baseUrl = "https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net";
  const url = `${baseUrl}/api/storeorder/cancel/${orderId}?warehouseId=${warehouseId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer your-auth-token",
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

$baseUrl = "https://ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net";
$orderId = 12345;
$warehouseId = 2;
$url = "{$baseUrl}/api/storeorder/cancel/{$orderId}?warehouseId={$warehouseId}";

$authToken = "your-auth-token";

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $authToken
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
