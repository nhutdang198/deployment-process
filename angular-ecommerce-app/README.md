# Angular E-commerce App

This is an Angular single-page application for an e-commerce website. The application displays a list of products, allows users to add products to their shopping cart, and complete the checkout process.

## Table of Contents

- [Angular E-commerce App](#angular-e-commerce-app)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Styling](#styling)
- [API Integration](#api-integration)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following software installed on your computer:

- Node.js and npm (Node Package Manager): You can download them from [nodejs.org](https://nodejs.org/).

### Installing

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git

```

2. Change to the project directory:

```bash
cd angular-e-commerce-app

```

3. Install project dependencies:

```bash
npm install

```

# Running the Application

Once the installation is complete, you can start the development server by running:

```bash
ng serve

```

The application will be available at http://localhost:4200/ in your web browser.

# Project Structure

The project structure is organized as follows:

- src/app/components: Contains Angular components for different parts of the application.
- src/app/services: Includes Angular services for data handling and communication.
- src/assets: Stores static assets such as images.
- src/styles.css: The global CSS file that imports Tailwind CSS and any additional styles.

# Usage

- Explore the product list by visiting the main page at http://localhost:4200/products.
- Click on a product to view its details.
- Add products to the shopping cart.
- Proceed to the checkout page at http://localhost:4200/checkout to complete your purchase.
- After a successful checkout, you'll be redirected to the success page.

# Styling

This project uses Tailwind CSS for styling. You can customize the appearance by modifying the styles in the tailwind.config.js and src/styles.css files.

# API Integration

The application integrates with an external API to fetch product data. Ensure that the API endpoints are correctly configured in the services.
