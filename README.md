# Mashgin's Cafe

A simple responsive menu checkout app built in express + vue.js

<p align="center">
  <img src="./docs/desktop-demo.gif?raw=true">
</p>

<p align="center">
  <img src="./docs/mobile-demo.gif?raw=true">
</p>

## How to start on docker
1. Clone the repo and navigate to the repo folder:
```bash
git clone https://github.com/fsnader/mashgin-cafe.git
cd mashgin-cafe
```

2. Run docker-compose:
```bash
docker-compose up
```
3. The app wil be running on port 8080
![img.png](docs/docker.png?raw=true)
## How to start locally
1. Clone the repo and navigate to the repo folder:
```bash
git clone https://github.com/fsnader/mashgin-cafe.git
cd mashgin-cafe
```
2. Install dependencies.
```bash
npm install
```

3. Start the project
```bash
npm start
```
This will start the backend and the frontend in parallel:
- Backend will be hosted on port 3000
- Frontend will be exposed on http://127.0.0.1:8080/

## Architecture
<p align="center">
  <img src="./docs/mashgin-coffee-hla.png?raw=true">
</p>

### Backend
A node.js express app that exposes routes to load menu items and submit orders:

- menu:
  - GET api/menu/items: Returns menu items. It filters through categoryId if it's provided in the query params
  - GET api/menu/categories: Returns all categories

- orders:
  - POST api/orders: An endpoint that receives a list of items/payment information and process orders

- images:
  - GET images/{image}: An endpoint that return static images

#### App structure:
- **routes**:
  - The api level abstraction. It handles aspects related to the HTTP layer (like controllers)

- **services**:
  - Services contain business logic.
    - For the orders processing, for example, it's the component responsible for validating the received data, calling the external payment gateway, saving the order in the database, etc

- **infrastructure**:
  - External components that are used by the services
  - **gateways**: Abstractions for external api's/services. In our case, we have the paymentGateway
  - **repositories**: Abstractions for data persistence, like databases or file systems.

### Frontend
A vue.js SPA that uses Vuetify and run on vite.
We use Vuetify to simplify the development of basic components like inputs, menus, cards, etc.
For the reactive store, we use Pinia

#### App structure:
- **Plugins:** Plugins installers, that will be called during the Vue app creation. It includes mostly the Vuetify installation
- **Router:** The configuration of the router, that will link urls with View
- **Layout:** Shared layouts that are used in the whole app, like the top bar, the navigation menu, my cart panel.
- **Views:** Pages of the app, that are exposed in the routes
  - **Home:** A simple home app, that has a CTA to go to the menu
  - **Menu:** The menu page, that shows the items and allow the user to select them

- **Components:** Reusable components that are used by views and other components
  - MenuItem: A component that represent a single menu item, that is used in the Menu view
  - MyCart: A component that abstracts the right panel menu that shows items the user selected
  - CheckoutDialog: The checkout modal, that is rendered from the MyCart component
  - OrderSubmittedCard: The success modal, used in the CheckoutDialog after the purchase is complete

- **Store:** Reactive stores used to store shared data across the app. We use it here to store the selected items
- **Services:** Functions that abstract backend calls
