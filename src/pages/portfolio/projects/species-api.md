---
layout: /src/layouts/ProjectLayout.astro
title: 'Zoologix Web Server and Client'
pubDate: 2025-5-21
description: 'Species-Api is a simple and comprehensive API used for gathering information from species'
languages: ["php", "javascript", "react", "mysql"]
image:
    url: "/images/projects/zoologix.png"
    alt: "Thumbnail of Zoologix"
---

**Zoologix** is a RESTful PHP-based application that provides structured access to biological data, including species names, habitats, diets, classifications, and more. It’s designed to serve researchers, developers, and educators with reliable, queryable endpoints for retrieving rich information about a wide range of species.

To simplify access and integration, the Zoologix HTTP Client was developed and tailored specifically for interfacing with the Species API. It handles requests, error handling, and parsing, making it easy for other applications to consume and display species data efficiently.

The application is built using **PHP** for backend logic and **MySQL** database interactions, while **React** and **JavaScript** power the interactive front-end components, enabling smooth and responsive user experiences.

## 🧩 Features

### 🧬 Species API Features

- Retrieve detailed species profiles (name, classification, etc.)

- Access habitat related data via region, climate etc.

- Filtering, Sorting and Pagination is supported.

- RESTful endpoints with clean, consistent structure

- JSON responses for easy integration

### ⚙️ Zoologix HTTP Client Features

- Simple, fluent interface for making API requests

- Built-in error handling and response validation

- Easy filtering and parameter chaining

- Designed specifically for consuming the Species API efficiently

## 🔒 Security

**JSON Web Token (JWT)** – Requires JWT to access internal routes, encoded with relevant user data to tailor the best response.

**Role-based access control** – Restrict access based on user roles (e.g., user, admin)

## 💡 Technologies used

- **PHP**
- **JavaScript**
- **React**
- **MySQL**

## 🌐 Github Link

- [Client](https://github.com/Trevor-Km/ws-http-client.git)
- [Server](https://github.com/Trevor-Km/species-api)


## 🎯 Objective

To provide an accessible and structured API for retrieving accurate information about species, habitats, and diets, supported by a dedicated JavaScript client that simplifies integration and promotes educational and research use.

🚀 *Developed by Trevor-Km.*
