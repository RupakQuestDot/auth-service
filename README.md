# auth-service

This project acts as authorisation service where a user can register and login with a unique key generatd to them Built with **NodeJs**,  **ExpressJS** & **MongoDB**.


## Setup

1. Clone the Repo:
```
git clone https://github.com/RupakQuestDot/auth-service.git
```

2. Navigate to root directory

```
cd backend-service
```

3. Install node dependencies

```
npm install (or) yarn install
```

4. Start development server

```
npm run dev (or) yarn run dev
```

## Production

1. Live server

```
npm start (or) yarn start
```

## Configuration
Go `.env` file in the root directory and do required changes
```
DB_URL = "ADD YOUR OWN DB URL"
```

### Middlewares Used

1. `body-parser` - The **body parser** middleware is especially **used** to extract the **body** from the incoming requests. In short, it extracts the data out of the request headers like the form data, etc,. It provides four modules to **parse** different types of data including, JSON **body parser**.
3. `multer` - **Multer** is a node. js middleware for handling multipart/form-data , which is primarily **used** for uploading files.
4. `morgan`- **Morgan** is a HTTP request logger middleware for **Node**. **js**. **It** simplifies the process of logging requests to your application. **You** might think of **Morgan** as a helper that generates request logs.

### Testing 
Use Postman as GUI tool to test the api end points.

## API END POINTS

Once run the application. Then navigate to url `localhost:8082/api/` method `GET` you will get the response as `'Welcome to CRUD USER AUTH API @8082..!'`.

1. Regitsering a user HTTP METHOD ==> `POST` , URL : `localhost:8082/api/users/register`. Register user with `name, password, role`. **All fields are manditory**.

2. Sign In a user HTTP METHOD ==> `POST`, URL: `localhost:8082/api/auth/login`. Login with entries `name, password`.
 On sucessful login you will get a token which is a autherisation token. This token can be used for further operations.

3. List ALL Users HTTP METHOD ==> `GET`, URL: `localhost:8082/api/users`. You will be able to fetch all the users from the Database.


