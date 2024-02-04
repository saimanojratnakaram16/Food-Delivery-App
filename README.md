# Food Hub Summer 2023

## Project Overview

### Technology Stack

- **Frontend:**
  - React
  - Redux
  - Tailwind CSS

- **Build Tools:**
  - Parcel
  - Hot Module Replacement (HMR)
  - File Watching Algorithm (written in C++)
  - Caching for Faster Builds
  - Image Optimization
  - Minification
  - Bundling
  - Compression
  - Consistent Hashing
  - Code Splitting
  - Differential Bundling (support for older browsers)
  - Diagnostic and Error Handling
  - HTTPS Support
  - Tree Shaking (removing unused code)
  - Different Development and Production Bundles

## Features

- **Menu App:**
  - Engineered a responsive food Menu app using React, Redux, and Tailwind CSS.
  - Applied hooks, custom hooks, context, and React routing for an optimized and intuitive ordering process.
  - Ensured a smooth and enhanced user experience.

- **Cart Functionality:**
  - Implemented efficient cart functionality with Redux for seamless state management.
  - Enabled smooth item addition and consistent data synchronization across components.

- **Testing:**
  - Ensured application reliability and stability through comprehensive Jest unit testing.
  - Achieved nearly 80% test coverage to validate the functionality of the application.

## Parcel Build Configuration

- **Dev Build:**
  - Utilized Parcel for development build.
  - Implemented a local server with Hot Module Replacement (HMR) for real-time updates during development.
  - Leveraged a file-watching algorithm written in C++ for efficient monitoring of file changes.

- **Optimizations:**
  - Implemented caching for faster builds.
  - Applied image optimization, minification, bundling, and compression techniques.

## Food Hub - Structure

The project follows a modular structure with components divided into header, body, and footer sections:

- **Header:**
  - Logo
  - Navigation Items

- **Body:**
  - Search
  - Restaurant Container
  - Restaurant Card
    - Image
    - Restaurant Name, Star Rating, Cuisine, Delivery Time

- **Footer:**
  - Copyright
  - Links
  - Address
  - Contact Information

## React Hooks and Routing

- **React Hooks:**
  - Utilized useState() for powerful state variables in React.
  - Implemented useEffect() for managing side effects in functional components.

- **Routing:**
  - Implemented client-side routing for a seamless and dynamic user experience.
  - Explored both client-side and server-side routing techniques.

## Redux Toolkit

- Installed `@reduxjs/toolkit` and `react-redux`.
- Built a Redux store and seamlessly connected it to the application.
- Utilized slices, dispatching actions, and selectors, with a focus on cartSlice.

## Testing

- Types of Testing:
  - Unit Testing
  - Integration Testing
  - End-to-End Testing (e2e testing)

- Testing Setup:
  - Installed React Testing Library and Jest.
  - Configured Babel for JSX compatibility in test cases.
  - Leveraged Jest for unit testing and jsdom for DOM testing.

## Project Setup

- **Installation:**
  - `npm install` - Install project dependencies.
  - `npm start` - Start the development server.

- **Export/Import:**
  - Default Export/Import: `export default Component; import Component from "path";`
  - Named Export/Import: `export const Component; import {Component} from "path";`

## Get Started

To explore and contribute to Food Hub Summer 2023, follow the setup instructions in the project documentation. We welcome collaboration and appreciate your interest in our innovative food ordering platform. Bon appétit!
