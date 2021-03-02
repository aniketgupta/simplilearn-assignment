# Simplilearn-assignment - API #

API Server for Simplilearn-assignment

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [Node.js](http://nodejs.org)                | `~ ^14.16.0`  |
| npm (comes with Node)                       | `~ ^6.14.11`  |

### How do I get set up? ###

* Clone the repo to your local machine.
* Open terminal, run 'npm install'
* Create .env file with the required values. (See Creating .env file)
* Run 'npm start'

### Creating .env file ###

This project uses "dotenv" npm package to store and use enviroment variables.
Create a .env file in the server root folder. Inside this file, the following variables must be declared:

* URL             : MONGO DB URL (E.g mongodb://localhost:27017/mern)
* SECRET          : The secret key with which to sign your JWT Tokens.

** Please ask the development team for the values in case you are not provived with them.

### Contribution guidelines ###

* General guidelines
  1. Never push to master branch.
  2. Run tests and ensure your code passes all the tests before pushing.
  3. Please use ESLint to ensure your code conforms to the standards.
  4. Indent code with 2 spaces.

* Code review
* Other guidelines

### Who do I talk to? ###

* aniket.gupta309@gmail.com
* Other community or team contact