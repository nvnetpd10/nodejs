const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')
//getting all
router.get('/', (req , res)=>{
    res.send('Hello World')

})
// getting one
router.get('/:id', (req , res)=>{
    res.send(req.params.id)

})
// creating one
router.post('/', (req , res)=>{

})
// updating one
router.patch('/:id', (req , res)=>{

})
//Deleting one
router.delete('/:id', (req , res)=>{

})