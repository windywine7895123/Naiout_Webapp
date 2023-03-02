const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book.js');
//get all
router.get('/', (req, res, next) => {
    Book.find((err, book) => {
        if(err) return next(err);
        res.json(book);
    })
})
//get one
router.get('/:id', (req, res, next) => {
    Book.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
//post
router.post('/', (req, res, next) => {
    Book.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
//put
router.put('/:id', (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
//delete
router.delete('/:id', (req, res, next) => {
    Book.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = router;