# Webpack Starter Template

This is a comprehensive starter template for setting up a webpack-based project. It includes configurations for development and production builds, as well as a development server with hot module replacement (HMR) enabled. Additionally, it incorporates modern tools for code quality and formatting.

# Features

1. Webpack 5 configuration
2. Development and production build modes
3. Hot module replacement (HMR) for seamless development
4. CSS and asset loaders
5. HTML template generation with html-webpack-plugin
6. Source maps for easier debugging
7. Prettier for code formatting
8. Babel for JavaScript transpilation
9. ESLint for code linting and error prevention
10. Jest for testing
11. Clean-webpack-plugin for cleaning the dist folder
12. Style-loader for loading styles
13. Webpack-cli for running webpack from the command line
14. Webpack-merge for merging webpack configurations

# Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/NNikoGG/webpack-starter-template.git
   ```

2. Install dependencies:

   ```bash
   cd webpack-starter-template
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will launch the webpack development server and open your application in the default browser. Any changes you make to the source files will be automatically reloaded in the browser thanks to HMR.

   Building for Production
   To create an optimized production build, run:

   ```bash
   npm run build
   ```

   This will generate a dist folder containing your optimized and minified production-ready files.

Scripts

- npm start: Start the webpack development server with HMR enabled
- npm run build: Build the application for production
- npm run watch: Watch for file changes and rebuild the application
- npm run prettier: Format code with Prettier
- npm run lint: Run ESLint for code linting and error prevention
- npm run lint:fix: Automatically fix ESLint errors and warnings
- npm test: Run Jest for testing
- npm run clean: Clean the dist folder
- npm run style: Load styles
- npm run webpack: Run webpack from the command line
- npm run merge: Merge webpack configurations
