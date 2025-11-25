---
sidebar_position: 1
---

# 📘 Introducción a Bamboo Cloud Services

Bienvenido a la documentación oficial de **Bamboo Cloud Services**.  
Este conjunto de microservicios permite la **integración con sistemas externos de China**, como **KingDee** y **Smart Link**, para centralizar y gestionar información de ventas provenientes de distintos canales.

## 🎯 Objetivo del Sistema

El objetivo de Bamboo Cloud Services es facilitar la integración de información de ventas de diferentes fuentes en un único ecosistema, permitiendo:

- Recibir ventas generadas en sistemas **POS**.
- Recibir ventas provenientes de **e-commerce** como Mercado Libre o Amazon, gestionadas a través de un sistema chino intermediario.
- Procesar y almacenar los datos de manera eficiente y escalable.

## 🏗️ Arquitectura General

Actualmente, el sistema cuenta con **dos microservicios principales**:

1. **Microservicio de Ventas POS:** Recibe las ventas generadas en puntos de venta físicos.
2. **Microservicio de Ventas E-commerce:** Recibe las ventas provenientes de plataformas de comercio electrónico, gestionadas a través de un sistema chino intermediario.

En el futuro, se podrán agregar más microservicios según las necesidades del negocio.

## ⚙️ Tecnologías Principales

El sistema se construye con las siguientes tecnologías:

- **.NET Core 8** mediante **Azure Functions Isolated**
- **SQL Server** y **Cosmos DB** para almacenamiento de datos
- **CQRS** como patrón de diseño para separar lectura y escritura
- **Entity Framework** para el acceso a datos

## 🔄 Comunicación entre Microservicios

La comunicación entre microservicios se realiza de manera **asíncrona**, asegurando desacoplamiento y escalabilidad del sistema.
