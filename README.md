# 📰 Fusion_News Web UI

**Fusion_News** is a modern and scalable news platform that enables users to browse news from multiple countries through a fast and intuitive interface. The frontend is built using **React.js**, with state management via **Redux-Saga**, and follows the **Atomic Design** structure for better scalability and maintainability.

---

## 🌟 Features

- 🌍 Browse news from various countries and regions
- 🔐 Secure login via **Gmail**
- 🎨 Clean, responsive UI built with **React.js** and **CSS**
- ⚛️ Scalable component structure based on **Atomic Design**
- 🔄 State management using **Redux** and **Redux-Saga**
- 📦 Modular architecture with clean separation of concerns
- 🔄 Backend **API Versioning** for backward compatibility
- 📘 Integrated with **Swagger** for interactive API documentation
- 🛡️ Authentication & authorization powered by **Identity Framework**

---

## 🧰 Technologies Used

### 🔧 Backend

- **.NET Core 8 / ASP.NET Core**
- **Entity Framework Core**
- **Identity Framework**
- **Swagger (Swashbuckle)**
- **API Versioning**

### 🎨 Frontend

- **React.js**
- **CSS / Google Fonts**
- **Bootstrap**
- **React Router (react-router-dom)**
- **React Icons (Font Awesome)**
- **React Slick (Carousel/Slider)**
- **Redux & Redux-Saga**
- **Atomic Design (Component Structure)**

---

## ⚙️ Installation Guide

### ✅ Prerequisites

Before starting, ensure that you have the following installed on your system:

1. **Node.js**  
   Node.js is a JavaScript runtime required to run the application.

   - **Download Node.js**:
  
     Go to the official Node.js website and download the LTS (Long Term Support) version:
     
     [Download Node.js](https://nodejs.org)

2. **npm (Node Package Manager)**
   
   npm comes with Node.js and is used to install and manage dependencies.

   - You can verify if **Node.js** and **npm** are already installed by running the following commands in your terminal:
     
     ```bash
     node -v
     npm -v
     ```
     
     If both commands return versions, you are good to go!

   If not installed, follow the steps above to install **Node.js** and **npm**.

---

### 📦 Install Dependencies

Once you have **Node.js** and **npm** installed, proceed to install the necessary project dependencies:

1. **Navigate to the UI Project Folder**  
   Open your terminal or command prompt and change to the project directory where your `package.json` file is located. Example:
   
     `cd path/to/your/project`

2. **Install the Dependencies**  
   In the project folder, run the following command to install all required dependencies:

     `npm install`

   This will download and install all necessary packages specified in the `package.json` file.

---

### 🔧 Installed Dependencies

The following key dependencies will be installed when you run `npm install`:

- **Bootstrap**: A popular CSS framework for building responsive and mobile-first websites.
- **react-router-dom**: For managing routing and navigation in the React application.
- **react-icons**: A library providing scalable icons that can be used in React components.
- **react-slick**: A carousel component for React (used for image sliders or slideshows).
- **redux**, **react-redux**, **redux-saga**: For managing the application state with Redux, and handling side effects with Redux-Saga.
- **Google Fonts**: Custom fonts are imported into `index.css` and `App.css` for better typography.

---

### ✅ Verify Installation

After the installation, verify that everything was set up correctly by ensuring the following:

- The **`node_modules`** folder appears in the root of your project.
- The required dependencies are listed in **`package-lock.json`**.

Once you confirm these steps, you're ready to move on to running and developing the application!

---

## 📁 Project Structure

The project follows the **Atomic Design** pattern and uses **Redux-Saga** for state management. Below is the main structure inside the `src/` directory:

### Root-Level Folders:

- `src/` - Main source directory containing the core of the application.
- `assets/` - Static files like images, fonts, etc.
- `components/` - Reusable UI components following the **Atomic Design** pattern.
  - `atoms/` - Smallest building blocks (e.g., Button, Input).
  - `molecules/` - Groups of atoms (e.g., SearchBar, CardHeader).
  - `organisms/` - Sections made from molecules (e.g., Header, Footer).
  - `templates/` - Layout templates for pages.
- `pages/` - Top-level pages or views.
- `redux/` - Redux state management.
  - `actions/` - Action creators.
  - `reducers/` - Reducer functions.
  - `sagas/` - Redux-Saga side effects.
  - `store.js` - Redux store configuration.
- `routes/` - React Router configurations.
- `App.js` - Root component for the application.
- `index.js` - Entry point for the React app.

---

## 🚀 Run the Project

Once you have installed all the dependencies, you can start the development server to view the project locally. Follow these steps:

---

1. **Start the Development Server**  
   Open your terminal or command prompt in the project directory (where your `package.json` file is located) and run the following command to start the server:

   - `npm run dev`

   This will launch the development server and compile the project.

2. **Open the Project in Your Browser**  
   Once the server is running, open your web browser and go to the following address:

   - `http://localhost:5173`

   This will display the app running locally.

   *(Note: The port number may vary depending on your environment configuration or settings in your project.)*

---

### ✅ Troubleshooting

- **If you see a port conflict**:  

  If port `5173` is already in use on your machine, you may need to change the port. You can either configure it in your project’s settings or run the development server on a different port.

- **If the browser doesn't load the app**:  

  Ensure the development server is still running and check for any error messages in the terminal. If there are errors, try restarting the server using `npm run dev` again.

---

By following these steps, you should have the project running locally in your browser!
