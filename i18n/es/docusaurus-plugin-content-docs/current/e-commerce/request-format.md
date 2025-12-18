---
sidebar_position: 3
title: Formato de Solicitud
---

# 📤 Formato de Solicitud

## 📋 Crear Orden

### Endpoint

<span class="http-method post">POST</span>`/api/StoreSale`

### Headers

| Header | Valor | Requerido | Descripción |
|--------|-------|-----------|-------------|
| X-API-Key | `{tu-api-key}` | Sí | Clave API para autenticación |
| Content-Type | application/json | Sí | Tipo de contenido de la solicitud |

### Campos Requeridos

- **`externalId`**: ID de referencia externa de tu sistema (requerido). Esto te permite enviar tu propio folio/número de referencia de venta.

## 🚚 Códigos de Tipo de Envío (ShippingType)

Códigos disponibles para el campo `ShippingType`:

| Código | Nombre | Descripción |
|--------|--------|-------------|
| CKLX007 | 发货至电商平台 | Enviar mercancía a la plataforma de comercio electrónico |
| CKLX008 | 代电商平台发货至客户 | Envío al cliente en nombre de la plataforma de comercio electrónico |

## 🏢 IDs de Almacén

IDs de almacén disponibles para el campo `WarehouseId`:

| ID de Almacén | Código | Nombre |
|---------------|--------|--------|
| 1540425 | 80112 | TEMU-U43 |
| 1540519 | 10401 | E-comerce CDMX Almacen |
| 1540520 | 10402 | E-comerce GDL Almacen |
| 2095021 | 80114 | TEMU-N840 |
| 2119342 | 80115 | TEMU-GDL |

### Ejemplo del Cuerpo

```json
{
  "CustomerCode": "CHH2A100706",
  "CustomerName": "MEGALUZ S.A. DE C.V.",
  "Remark": "test nito",
  "BillDate": "16/12/2025",
  "ShippingType": "0001",
  "externalId": "TCSQ20251218405",
  "Detail": [
    {
      "code": "000002",
      "name": "FREIDORA DE AIRE FDA08V",
      "price": 550,
      "quantity": 100,
      "warehouseId": 1540416
    },
    {
      "code": "000005",
      "name": "FREIDORA DE AIRE FDA09A",
      "price": 380,
      "quantity": 200,
      "warehouseId": 1540416
    }
  ]
}
```

## ❌ Cancelar Orden

### Endpoint

<span class="http-method delete">DELETE</span>`/api/storeorder/cancel/{orderId}?warehouseId={warehouseId}`

### Parámetros

| Parámetro | Tipo | Ubicación | Requerido | Descripción |
|-----------|------|-----------|-----------|-------------|
| orderId | int | Ruta | Sí | El ID de la orden a cancelar |
| warehouseId | int | Query | Sí | El ID del almacén asociado con la orden |

### Headers

| Header | Valor | Requerido | Descripción |
|--------|-------|-----------|-------------|
| X-API-Key | `{tu-api-key}` | Sí | Clave API para autenticación |
| Content-Type | application/json | Sí | Tipo de contenido de la solicitud |

### Ejemplo de Solicitud

```http
DELETE /api/storeorder/cancel/12345?warehouseId=2 HTTP/1.1
Host: ecommercestoreorders-fgaxd7axcnezhnbh.westus-01.azurewebsites.net
X-API-Key: tu-clave-api-aqui
```
