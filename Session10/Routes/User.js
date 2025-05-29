const express = require("express");
const router = express.Router();
const User = require("../Schema/User"); // Adjust the path as necessary
router.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const newUser = new User({ name, email, password, phone });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created succesfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});
// router.get("/all", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });
module.exports = router;
