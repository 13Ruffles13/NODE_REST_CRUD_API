import { v4 as uuidv4 } from "uuid"; // Import the uuid library for generating unique IDs

let users = [
  // Initial array of users (currently commented out)
  // {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 25,
  // },
  // {
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   age: 24,
  // },
];

// Update a user by ID
export const updateUserByID = (req, res) => {
  const { id } = req.params; // Extract the user ID from the request parameters
  const { firstName, lastName, age } = req.body; // Extract the updated user information from the request body
  const userToUpdate = users.find((user) => user.id === id); // Find the user by ID

  // Update the user's information if provided
  if (firstName) {
    userToUpdate.firstName = firstName;
  }
  if (lastName) {
    userToUpdate.lastName = lastName;
  }
  if (age) {
    userToUpdate.age = age;
  }

  res.send(`User with the ID ${id} updated`); // Send a response indicating the user was updated
};

// Delete a user by ID
export const deleteUserByID = (req, res) => {
  const { id } = req.params; // Extract the user ID from the request parameters

  // Filter out the user with the given ID
  users = users.filter((user) => user.id != id);

  res.send(`User with the ID ${id} deleted from the database.`); // Send a response indicating the user was deleted
};

// Get a user by ID
export const getUserFromID = (req, res) => {
  const { id } = req.params; // Extract the user ID from the request parameters

  const foundUser = users.find((user) => user.id === id); // Find the user by ID

  res.send(foundUser); // Send the found user as the response
};

// Get all users
export const getUser = (req, res) => {
  res.json(users); // Send the users array as a JSON response to the client
};

// Create a new user
export const createUser = (req, res) => {
  console.log(req.body); // Log the request body to the console

  const user = req.body; // Extract the new user information from the request body

  const userWithID = { ...user, id: uuidv4() }; // Generate a unique ID for the new user and add it to the user object

  users.push(userWithID); // Add the new user to the users array

  res.send(`User with the username ${user.firstName} added to the database`); // Send a response indicating the user was added
};
