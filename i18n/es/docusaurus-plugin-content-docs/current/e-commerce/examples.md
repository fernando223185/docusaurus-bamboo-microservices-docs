---
sidebar_position: 5
title: Examples
---

# ✨ Examples

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
