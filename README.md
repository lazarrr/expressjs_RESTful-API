# Nodejs Express RESTful API

**version 1.0.0**

## Getting started
---
To get the Nodejs server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server
- after that you can send ` GET,POST AND DELETE ` HTTP requests
- if you'r using [Visual Studio Code](https://code.visualstudio.com/) as IDE there is a file requests.rest in repo which use [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) to send HTTP requests from VS Code IDE or you can use [Postman](https://www.postman.com/)


## Code Overview
---
### Dependencies
---

- [Express.js](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [sqlite3](https://github.com/sqlite/sqlite) - DB used in this project
- [jwt-decode](https://github.com/auth0/jwt-decode) - For extracting data from token
- [crypto-js](https://github.com/brix/crypto-js) - For crypting passwords in DB
- [dotenv](https://github.com/motdotla/dotenv) For loads environment variables from a `.env` file into `process.env`

## Application Structure
---

- `app.js` - The express application.
- `server.js` - The entry point to our application. 
- `routes/` - This folder contains the route definitions for our API.
- `DB/` - This folder contains the file which is responsible for connecting to DB and sqlite3 data base.

## Authentication
---
Requests are authenticated using the Authorization header with a valid JWT.There is the express middlewares in `auth.js` file that can be used to authenticate requests.
