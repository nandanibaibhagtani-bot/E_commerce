const User = require('../models/user');

const registerUser = (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = User.getAll();

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "This email is already registered" });
    }

    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    User.save(users);

  res.status(201).json({ 
  message: "Account created successfully!", 
  user: { id: newUser.id, name, email } 
});
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const users = User.getAll();

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    res.status(200).json({ 
      message: "Login successful!", 
      user: { id: user.id, name: user.name, email: user.email } 
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { registerUser, loginUser };