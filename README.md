# Interstitial

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)

## Description

A full-stack health app featuring vite + react + tailwindcss + mongoDB + mongoose and calling a nutrition API with user authentication

## Installation

1. Create package.json for root and install dependencies:

```zsh
npm install express dotenv mongoose colors express-async-handler
npm install nodemon --save-dev
```
Add the following scripts:

"scripts": {
    "start": "node server/server.js",
    "server": "nodemon server/server.js"
  }

2. In root create .gitignore file:

node_modules
.env

3. In root create .env file:

NODE_ENV = development
PORT = 3001



4. Create package.json for client and install dependencies:

```zsh
npm install

```
5. In server.js, create define routes and middleware:

app.use('/api/food', foodRoutes);
app.use ('/api/user', userRoutes);
app.use(express.json());

## Usage

Link to render deployment:

[interstitial](https://interstitial.onrender.com/)

Screenshots of app demonstrating functionality:

### screenshot-1

![home page](./client/src/assets/screenshot-1.png)

### screenshot-2

![register page](./client/src/assets/screenshot-2.png)

### screenshot-3

![log in page](./client/src/assets/screenshot-3.png)

### screenshot-4

![album search page](./client/src/assets/screenshot-4.png)

### screenshot-5

![saved playlists page](./client/src/assets/screenshot-5.png)

### screenshot-6

![spotify api page](./client/src/assets/screenshot-6.png)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing Guidelines

Create a new branch for the commit and start a pull request.

## Testing

## Authors and Acknowledgements

[email] (ginadrcoder@gmail.com)

[email] (mitchjoelklein@hotmail.com)

## Questions

For enquiries, please contact me at:

[email] (ginadrcoder@gmail.com)

[github] (https://github.com/gina-t)
