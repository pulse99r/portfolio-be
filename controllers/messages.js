// messages
const express = require('express');
const messageController = express.Router();
// const db = require('../db/dbConfig');

const {
  getAllMessages,
  getOneMessage,
  updateMessage,
  createMessage
} = require('../queries/messages.js')

messageController.get('/', async (req, res) =>{
  try {
    const messages = await getAllMessages()
    res.status(200).json(messages)
  } catch (error) {
    res.status(400).json({error: 'Server Not Responding'})
  }
})

messageController.get('/:id', async (req, res) =>{
  const {id} = req.params
  try {
    const message = await getOneMessage(id)
    res.status(200).json(message)
  } catch (error) {
    res.status(400).json({error: 'Server Not Responding'})
  }
})
messageController.put('/', async (req, res) =>{
  const body = req.body
  try {
    const readMessage = await updateMessage(body)
    res.status(200).json(readMessage)
  } catch (error) {
    res.status(400).json({error: 'Server Not Responding'})
  }
})

messageController.post('/', async (req, res) =>{
  const body = req.body;
  console.log('controller:', body)
  try {
    const newMessage = await createMessage(body)
    res.status(200).json(newMessage)
  } catch (error) {
    res.status(400).json({error: 'Server Not Responding****'})
  }
})

module.exports = messageController;