const db = require('../db/dbConfig')

const getAllMessages = async () => {
  try {
    const messages = await db.any('SELECT * FROM pf_msgs_001')
    return messages
  } catch (error) {
    return 'no messages found'
  }
};

const getOneMessage = async (id) => {
  try {
    const messages = await db.any('SELECT * FROM pf_msgs_001 WHERE id=$1', [id])
    return messages
  } catch (error) {
    return 'no messages found'
  }
};
const updateMessage = async (body) => {
  const {id, viewed} = body;
  try {
    const message = await db.one('UPDATE pf_msgs_001 SET viewed = $1 WHERE id=$2 RETURNING *', [viewed, id])
    return message
  } catch (error) {
    return 'no messages found'
  }
};
const createMessage = async (body) => {
  const{
    first_name, last_name, phone, message, ft_job, pt_job, short_term, viewed, date_created
  } = body;
  console.log('query:',first_name, last_name, phone, message, ft_job, pt_job, short_term, viewed, date_created )
  try {
    const newMessage = await db.one('INSERT INTO pf_msgs_001 (first_name, last_name, phone, message, ft_job, pt_job, short_term, viewed, date_created) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *', [first_name, last_name, phone, message, ft_job, pt_job, short_term, viewed, date_created])
    return newMessage
  } catch (error) {
    return 'unable to insert record...'
  }
};

module.exports={
  getAllMessages,
  getOneMessage,
  updateMessage,
  createMessage
};