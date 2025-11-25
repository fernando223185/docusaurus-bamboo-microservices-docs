---
sidebar_position: 1
---

# 📘 Introduction to Bamboo Cloud Services

Welcome to the official documentation for **Bamboo Cloud Services**.  
This set of microservices enables **integration with external Chinese systems**, such as **KingDee** and **Smart Link**, to centralize and manage sales data from multiple channels.

## 🎯 System Objective

The goal of Bamboo Cloud Services is to facilitate the integration of sales data from different sources into a single ecosystem, allowing you to:

- Receive sales generated from **POS systems**.
- Receive sales from **e-commerce platforms** like Mercado Libre or Amazon, managed through a Chinese intermediary system.
- Process and store data efficiently and in a scalable way.

## 🏗️ General Architecture

Currently, the system has **two main microservices**:

1. **POS Sales Microservice:** Handles sales generated from physical point-of-sale systems.
2. **E-commerce Sales Microservice:** Handles sales coming from e-commerce platforms, managed through a Chinese intermediary system.

In the future, additional microservices may be added as business needs grow.

## ⚙️ Main Technologies

The system is built with the following technologies:

- **.NET Core 8** using **Azure Functions Isolated**
- **SQL Server** and **Cosmos DB** for data storage
- **CQRS** design pattern to separate reads and writes
- **Entity Framework** for data access

## 🔄 Microservice Communication

Communication between microservices is **asynchronous**, ensuring decoupling and scalability across the system.
