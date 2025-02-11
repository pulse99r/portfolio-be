// Users
const express = require('express');
const usersController = express.Router();
// const db = require('../db/dbConfig');

// Import the bcryptjs library
const bcrypt = require('bcryptjs');

// Example: Hash a password
const plainPassword = 'my_secure_password';
const saltRounds = 12; // Number of salt rounds (higher is more secure but slower)

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }

  console.log('Hashed password:', hash);

  // Example: Verify a password
  const inputPassword = 'my_secure_password'; // Password to verify

  bcrypt.compare(inputPassword, hash, (err, result) => {
    if (err) {
      console.error('Error comparing passwords:', err);
      return;
    }

    if (result) {
      console.log('Password is correct!');
    } else {
      console.log('Password is incorrect.');
    }
    });
  });


const {
  getAllUsers,
  getOneUser,
  updateUser,
  createUser
} = require('../queries/users.js')

usersController.get('/', async (req, res) =>{
  try {
    const users = await getAllUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({error: 'Server Not Responding'})
  }
})

usersController.get('/:id', async (req, res) =>{
  const {id} = req.params
  try {
    const user = await getOneUser(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: 'Server Not Responding'})
  }
});

module.exports = usersController;