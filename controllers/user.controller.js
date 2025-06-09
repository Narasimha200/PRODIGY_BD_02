const User = require("../models/user.model");

// GET all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// GET single user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// CREATE new user
exports.createUser = async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

// UPDATE user
exports.updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedUser) return res.status(404).json({ message: "User not found" });
  res.json(updatedUser);
};

// DELETE user
exports.deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) return res.status(404).json({ message: "User not found" });
  res.json({ message: "User deleted" });
};
