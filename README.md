# Interstitial

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)
- [Questions](#questions)

## Description

A responsive, full-stack health application built on the MERN stack with TypeScript. Interstitial features real-time nutrition data through the FatSecret API, secure user authentication, and a modern UI built with Vite and Tailwind CSS. The app helps users make informed choices around nutrition and exercise, by providing detailed nutritional information and educational content.

## Technologies Used

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Authentication: JWT (JSON Web Tokens)
- API: FatSecret Platform REST API
- Deployment: Render


## Features

- Real-time nutrition data lookup
- Personalized food favorites and tracking
- Calorie counting and meal planning
- Educational content on nutrition and health
- Responsive design for mobile and desktop
- Secure user authentication

## Installation

To get started with this project, implement the following steps:

1. Clone the repo:

```zsh
git clone git@github.com:gina-t/interstitial.git
```

2. In `root` directory install dependencies:

```zsh
npm install 
```

3. In `root` directory create .env file:

```javascript
NODE_ENV=development
PORT=3001
MONGO_URI= 
JWT_SECRET= 
FATSECRET_CLIENT_ID= 
FATSECRET_CLIENT_SECRET=
```

4. In `server` directory generate secret token for JWT and paste into JWT_SECRET field in the .env file:

```zsh
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

5. Navigate to `https://www.fatsecret.com/#fatsecret-platform` and under Nutrition API, register and log in to generate 3 API keys:

- Consumer Key copy and paste to FATSECRET_CLIENT_ID in .env file
- Consumer Secret copy and paste to FATSECRET_CLIENT_SECRET in .env file
- Add the Render Static Outbound IP Addresses to ypur Fatsecret Platform's OAuth 2.0 whitelisted IP addresses list

6. In `client` directory install dependencies:

```zsh
cd client
npm install
```

7. Copy and paste your MongoDB Atlas connection string to `MONGO_URI` in .env file. Replace <db_password> with the password for the database user, and after the / add the name of the database.

8. After installation, you can start the development server:

```zsh
# Start backend server
npm run server

# Start frontend development server in another terminal
npm run client

# Or run both concurrently
npm run dev
```

9. Successful Render deployment requires the following environment variables:

- `FATSECRET_CLIENT_ID` value=

- `FATSECRET_CLIENT_SECRET` value=

- `JWT_SECRET` value=

- `MONGO_URI` value=

- `NODE_ENV` value=production


## Usage

Link to deployed app url:

[interstitial](https://interstitial.onrender.com)

Screenshots of app demonstrating functionality:

### screenshot-1

![home page](./client/src/assets/screenshot-1.png)

### screenshot-2

![register page](./client/src/assets/screenshot-2.png)

### screenshot-3

![food search page](./client/src/assets/screenshot-3.png)

### screenshot-4

![my favourite foods page](./client/src/assets/screenshot-4.png)

### screenshot-5

![calorie tracker](./client/src/assets/screenshot-5.png)

### screenshot-6

![calorie literacy page](./client/src/assets/screenshot-6.png)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contributing Guidelines

To contribute, please follow these steps:

1. **Fork the Repository**:
   - Navigate to `https://github.com/gina-t/interstitial`
   - Click "Fork" to create a copy of the repository in your GitHub account.

2. **Clone the Forked Repository**:
   ```zsh
   git clone https://github.com/YOUR-USERNAME/interstitial.git
   cd interstitial
   ```

3. **Create a New Feature Branch**:
   - Create a new branch for your feature or bug fix:
     ```zsh
     git checkout -b feature/your-feature-name
     ```

4. **Make Changes**:
   - Make your changes to the codebase.
   - Ensure your changes follow the project's coding standards and guidelines.

5. **Commit Your Changes**:
   - Stage your changes:
     ```zsh
     git add -A
     ```
   - Commit your changes with a descriptive commit message:
     ```zsh
     git commit -m "Add your descriptive commit message here"
     ```

6. **Push Your Changes**:
   - Push your changes to your forked repository:
     ```zsh
     git push origin feature/your-feature-name
     ```

7. **Create a Pull Request**:
   - Navigate to the original repository.
   - Click the "New Pull Request" button.
   - Select your feature branch from your forked repository and compare it with the Develop branch of the original repository.
   - Click "Create Pull Request" to submit your changes for review.

8. **Review Process**:
   - Your pull request will be reviewed by the project maintainer.
   - Once your pull request is approved, it will be merged into the `develop` branch.

Thank you for contributing to the project.


## Testing

Component testing can be performed using Cypress.

To install and run tests:

```zsh
npm install --save-dev cypress
npx cypress open
```

## Authors and Acknowledgements

- Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)

## Questions

For enquiries, please contact me at:

- Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)

- GitHub: [gina-t](https://github.com/gina-t)
