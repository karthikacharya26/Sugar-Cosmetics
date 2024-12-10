
# SUGAR Cosmetics Clone



## About the Project

SUGAR Cosmetics Clone is a full-stack e-commerce website built using the MERN stack. This project replicates the user experience of the SUGAR Cosmetics website, providing a seamless and interactive interface for users to browse and purchase products. It includes both frontend and backend components, offering a pleasant user experience.

You can view the deployed project here: [SUGAR Cosmetics Clone](https://sugar-cosmetics-opal.vercel.app/) 🚀
## Tech Stack

- **Frontend**: React, Chakra UI
- **State Management**: Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: bcrypt, JWT
- **Packages**: npm (e.g., react-slick for carousels, razorpay, etc)


## Features

- **Great UI**: Designed with Chakra UI for a modern layout.
- **Proper Routing**: Implemented to ensure smooth navigation between pages.
- **Sorting Options**: Helps users to sort products based on various criteria.
- **Multiproduct Page**: Displays a list of products with filtering options.
- **Single Product Page**: Provides detailed information about each product.
- **Cart Page**: Allows users to view and manage their selected items.
- **Login and Signup**: Secure authentication with JWT and password hashing with bcrypt.
- **Razorpay Integration**: Seamlessly integrated Razorpay payment gateway for secure and efficient transactions.


## Frontend

- Utilized **React** and **Chakra UI** to create a visually appealing user interface.
- Managed application states (login, cart, loading) using **Redux**.
- Implemented various packages via **npm**, including `react-slick` for carousel functionality.
## Backend

- Developed server-side logic using **Node.js** and **Express**.
- Used **bcrypt** for password hashing and **JWT** for token-based authentication.
- **MongoDB** serves as the database to store user and product data.
- Sensitive information such as `MONGO_URI` and `userSecretKey` is protected using a `.env` file.
- Integrated **Razorpay** to handle secure and efficient payment processing.
## Images

### Homepage

![Homepage]()

### Multi-product Page

![Multiproduct Page]()

### Single Product Page

![Single Product Page]()

### Cart Page

![Cart Page]()

### Login Page

![Login Page]()

### Signup Page

![Signup Page]()

### Payment Integration

![Payment Integration]()
## Installation

To get started with this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/karthikacharya26/Sugar-Cosmetics.git

2. Navigate to the project directory:

   ```bash
    cd Sugar-Cosmetics

3. Install the dependencies for both frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install

4. Create a .env file in the backend directory and add the following environment variables:

   ```bash
    MONGO_URI=<your-mongodb-url>
    SecretKey=<your-jwt-secret>
    RAZORPAY_KEY_ID=<your-razorpay-key-id>
    RAZORPAY_SECRET=<your-razorpay-secret>

5. Start the backend server:

   ```bash
    npm start

6. Start the frontend server:

    ```bash
    cd client
    npm run dev
    
    
