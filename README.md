# FitHeal Frontend

Welcome to the frontend repository of the **FitHeal** application. FitHeal is a health and fitness platform designed to help users track their workouts, monitor their diet, and achieve their fitness goals.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains the frontend code for the FitHeal application. The frontend is responsible for the user interface and user experience, providing a seamless way for users to interact with their health and fitness data.

## Features

- **User Registration & Login:** Secure authentication flow using JWT.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Workout Management:** Users can create, view, update, and delete their workout routines.
- **Diet Tracking:** Users can manage their meal plans and monitor nutritional intake.
- **Progress Visualization:** Charts and graphs to visualize user progress over time.
- **API Integration:** Seamless communication with the backend for data persistence.

## Technologies

- **React.js** - Frontend library for building user interfaces.
- **Redux** - State management library for managing application state.
- **Axios** - Promise-based HTTP client for making API requests.
- **React Router** - For handling routing in the application.
- **Material-UI** - UI component library for styling the application.
- **Chart.js** - For visualizing data with charts and graphs.

## Installation

To get the frontend of FitHeal up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/fitheal-frontend.git
    cd fitheal-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables:

    ```
    REACT_APP_API_BASE_URL=http://localhost:5000/api
    ```

4. Start the development server:
    ```bash
    npm start
    ```

    The application should now be running at `http://localhost:3000`.

## Environment Variables

The following environment variables need to be configured:

- `REACT_APP_API_BASE_URL`: The base URL of the backend API.

## Usage

- **Home Page:** Displays an overview of the user’s fitness stats and progress.
- **Workout Page:** Manage workouts, view past routines, and create new workout plans.
- **Diet Page:** Track meals, manage diet plans, and view nutritional information.
- **Progress Page:** View detailed progress reports with charts and graphs.

## Folder Structure

The project structure is organized as follows:

```
fitheal-frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Application pages
│   ├── redux/              # Redux state management
│   ├── services/           # API service functions
│   ├── utils/              # Utility functions
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .env                    # Environment variables
├── package.json            # Project dependencies
└── README.md               # Project documentation
```
