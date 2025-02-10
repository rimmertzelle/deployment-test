# Plant Parent - Daily Plant

## Project Overview
The "Daily Plant" application helps users explore a variety of indoor and outdoor plants. The app displays a list of plants fetched from the Perennial API. 

see: https://perenual.com/ from more information and documentation on the API.

### Key Features:
- Fetch and Display a random plant and its data from an external API (Perennial)
- Display a list of indoor and outdoor plants

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [API](#api)
- [Deployment](#deployment)
- [License](#license)

## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/plant-parent.git
   cd plant-parent
2. Install Dependecies:
    ```bash
    npm install
3. Run the development server:
    ```bash
    npm run dev
4. Open your browser and navigate to http://localhost:5000 to view the application.

*PS: you might have to run:*
    ```
    npm install @sveltejs/adapter-vercel
    ```

## Usage
Once the app is running, you can:

- View the list of indoor and outdoor plants.
- The list will be fetched dynamically from the Perennial API, displaying plant names, scientific names, and thumbnails.
- Use the menu to navigate to each page.

## Technology Stack
#### Frontend: 
Svelte, TypeScript, Tailwind CSS
#### API: 
Perennial API (for fetching plant data)

## Packages
- svelte: A fast, lightweight framework for building user interfaces.
- tailwindcss: Utility-first CSS framework for custom designs.
- typescript: Superset of JavaScript for better tooling support.
- @sveltejs/adapter-static: Adapter for building static sites with Svelte.

## API
The plant data is fetched from the Perennial API. Here are the API endpoints used:

Indoor plants:
```
https://perenual.com/api/species-list?key={User Credential Key}&indoor=1
```
Outdoor plants:
```
https://perenual.com/api/species-list?key={User Credential Key}
````
## Deployment
This project is currently deployed using **Vercel**. <br> 
Either view the deployment in Github: https://github.com/itsMiniscule/daily-plant/deployments

or view the deployed application via this link:
https://daily-plant-rzzq-qhbsh9zm7-anne-van-den-bergs-projects.vercel.app/

##  License
This project is licensed under the **MIT License**.

