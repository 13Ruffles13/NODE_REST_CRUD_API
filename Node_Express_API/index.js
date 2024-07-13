import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js"; // Import the user routes

const app = express(); // Create an Express application instance
const PORT = 5000; // Define the port number where the server will listen for requests

// Middleware to parse JSON bodies in incoming requests
app.use(bodyParser.json());

// Mount the user routes at the /users path
app.use("/users", userRoutes); // All routes defined in userRoutes will be prefixed with /users

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server Running on port: http://localhost:${PORT}`);
});

// Create a route for the root URL ("/")
app.get("/", (req, res) => {
  console.log("[TEST]!"); // This message will be logged to the console when the root URL is accessed

  res.send("Hello from the homepage!"); // Send a response back to the client
});
