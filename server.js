const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Helper function to read users from JSON file
const readUsers = () => {
  const data = fs.readFileSync('users.json', 'utf8');
  return data ? JSON.parse(data) : [];
};

// Helper function to write users to JSON file
const writeUsers = (users) => {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

// POST endpoint to register a new user
app.post('/test', (req, res) => {
  const { name, age, email } = req.body;
  const users = readUsers();

  // Check if a user with the same name, email, or password already exists
  const existingUser = users.find(
    (user) => user.name === name || user.email === email
  );

  if (existingUser) {
    return res.status(400).json({ message: 'User with the same name or email already exists.' });
  }

  // Calculate the new ID, incrementing from the last one
  const lastId = users.length > 0 ? users[users.length - 1].id : 0;
  const newUser = { id: lastId + 1, name, age, email };

  // Add the new user and write to the file
  users.push(newUser);
  writeUsers(users);

  res.json(newUser); // Respond with the new user data, including the ID
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
