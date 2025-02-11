const db = require('../db/dbConfig')

const getAllUsers = async () => {
  try {
    const users = await db.any('SELECT * FROM users')
    return users
  } catch (error) {
    return 'no messages found'
  }
};

const getOneUser = async (id) => {
  try {
    const users = await db.any('SELECT * FROM users WHERE id=$1', [id])
    return users
  } catch (error) {
    return 'no users found'
  }
};
const updateUser = async (body) => {
  const {id, viewed} = body;
  try {
    const user = await db.one('UPDATE users SET viewed = $1 WHERE id=$2 RETURNING *', [viewed, id])
    return user
  } catch (error) {
    return 'no users found'
  }
};
const createUser = async (body) => {
  const{
    username, email, password_hash, first_name, last_name, phone, is_active, date_created, last_login
  } = body;
  console.log('query:',username, email, password_hash, first_name, last_name, phone, is_active, date_created, last_login )
  try {
    const newUser = await db.one('INSERT INTO users (username, email, password_hash, first_name, last_name, phone, is_active, date_created, last_login) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *', [username, email, password_hash, first_name, last_name, phone, is_active, date_created, last_login])
    return newMessage
  } catch (error) {
    return 'unable to insert record...'
  }
};

module.exports={
  getAllUsers,
  getOneUser,
  updateUser,
  createUser
};