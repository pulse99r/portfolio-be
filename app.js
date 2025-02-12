const express = require('express')
const messageController = require("./controllers/messages")
const usersController = require('./controllers/users')


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


const app = express()
const cors = require('cors')
app.use(express.json())

app.use(cors())

// -------- project routes -------- 
app.use('/messages', messageController)
app.use('/users', usersController)

// -------- Default or Home routes -------- 
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
})

app.get('/', (req, res) => {
  const msg = `
  Welcome to my portfolio site!!
  `
  res.send(msg)
})

app.get('*', (req, res) => {
  res.send('The page you are looking for does not exist')
})

module.exports = app;
