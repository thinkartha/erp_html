# Node.js Application

This project is a simple Node.js application that implements routing for a web application with three main HTML pages: the dashboard (index.html), sign-up page (sign-up.html), and sign-in page (sign-in.html). 

## Project Structure

```
nodejs-app
├── public
│   ├── dist
│   │   ├── css
│   │   │   └── tabler.min.css
│   │   ├── js
│   │   │   └── tabler.min.js
│   └── erp_html
│       ├── index.html
│       ├── sign-up.html
│       └── sign-in.html
├── src
│   ├── routes
│   │   └── index.js
│   └── app.js
├── package.json
└── README.md
```

## Getting Started

To get started with this application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd nodejs-app
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Run the application**:
   Start the server by running:
   ```
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Features

- **Routing**: The application uses Express to handle routing for the main pages.
- **Static Files**: CSS and JavaScript files are served from the `public` directory.
- **User Authentication**: Basic forms for user sign-up and sign-in.

## Dependencies

- Express: A minimal and flexible Node.js web application framework.

## License

This project is licensed under the MIT License.