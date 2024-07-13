import express from "express"; // Import the Express framework
import {
  createUser,
  getUser,
  getUserFromID,
  deleteUserByID,
  updateUserByID,
} from "../controllers/users.js"; // Import the controller functions for user operations

const router = express.Router(); // Create a new router instance

// All routes in here are starting with /users route

// Route to get all users
// GET request to /users
router.get("/", getUser);

// Route to create a new user
// POST request to /users
router.post("/", createUser);

// Route to get a user by ID
// GET request to /users/:id
router.get("/:id", getUserFromID);

// Route to delete a user by ID
// DELETE request to /users/:id
router.delete("/:id", deleteUserByID);

// Route to update a user by ID
// PATCH request to /users/:id
router.patch("/:id", updateUserByID);

export default router; // Export the router instance
