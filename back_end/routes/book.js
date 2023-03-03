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
router.get('/detail/:id', (req, res, next) => {
    Book.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
//post
router.post('/add-book', (req, res, next) => {
    Book.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
//put
router.put('/edit-book/:id', (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body}, (err, post) => {
        if (err) return next(err);
            console.log(err)
        res.json(post);
            console.log('Book Updated Successfully');
    })
})
//delete
router.delete('/delete-book/:id', (req, res, next) => {
    Book.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.status(200).json({
            msg: post
        });
    })
})

module.exports = router;