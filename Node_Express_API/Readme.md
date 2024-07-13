# Node.js + Express.js API

## Overview

A backend application using Node.js and Express.js for managing user data with CRUD operations. Test API endpoints using Postman.

## Installation

1. **Clone the repo**:
    ```sh
    git clone https://github.com/13Ruffles13/NODE_REST_CRUD_API
    cd NODE_REST_CRUD_API
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the server**:
    ```sh
    npm start
    ```

## API Endpoints

### Create a User

- **Method**: `POST`
- **URL**: `/users`
- **Body**:
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25
    }
    ```
- **Description**: Adds a new user with a unique ID.

### Get All Users

- **Method**: `GET`
- **URL**: `/users`
- **Description**: Retrieves all users.

### Get User by ID

- **Method**: `GET`
- **URL**: `/users/:id`
- **Description**: Retrieves a user by ID.

### Update User by ID

- **Method**: `PATCH`
- **URL**: `/users/:id`
- **Body**:
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25
    }
    ```
- **Description**: Updates user information.

### Delete User by ID

- **Method**: `DELETE`
- **URL**: `/users/:id`
- **Description**: Deletes a user by ID.

## Example Code

### Controller Functions

```javascript
import { v4 as uuidv4 } from "uuid";

let users = []; // Array to store users

export const createUser = (req, res) => {
  const user = { ...req.body, id: uuidv4() };
  users.push(user);
  res.send(`User ${user.firstName} added`);
};

export const getUser = (req, res) => res.json(users);
export const getUserFromID = (req, res) => res.send(users.find(user => user.id === req.params.id));
export const updateUserByID = (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  Object.assign(user, req.body);
  res.send(`User ${req.params.id} updated`);
};
export const deleteUserByID = (req, res) => {
  users = users.filter(user => user.id !== req.params.id);
  res.send(`User ${req.params.id} deleted`);
};
