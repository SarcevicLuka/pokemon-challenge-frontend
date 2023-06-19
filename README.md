# Pokemon challenge frontend application

This is the frontend part of the Pokemon challenge game application.
The application is built in ReactTS with Axios for api fetching.
Application is build with **Vite** build tool.

# Table of contents

- [Pokemon challenge frontend application](#pokemon-challenge-frontend-application)
- [Table of contents](#table-of-contents)
- [Folder Structure](#folder-structure)
- [Running and building the application](#running-and-building-the-application)

---

# Folder structure

The application is divided in several logical parts. 
[Routes](./src/routes/) contains all the routes definitions.
[Public](./src/public/) contain the images and components that are publicly used.
[Provider](./src/provider/) contains the auth context and the provider.
[Pages](./src//pages/) contains all the pages that are used in the application.
[Components](./src//components/) contains all the components that are used in the application like forms, error components etc.
[Api](./src/api/) contains all the Axios api calls and user defined types.

# Running and building the application

To build the application run the 
```
npm run build
```
command.

To run the aplication in development mode run the
```
npm run dev
```
command.