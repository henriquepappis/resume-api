const express = require("express");
let router = express.Router();

router.route("/category")
    .get((req, res) => {
        res.send("[GET METHOD] Category");
    })
    .post((req, res) => {
        res.send("[POST METHOD] Category");
    });

router.route("/category/:categoryId")
    .get((req, res) => {
        res.send("[GET METHOD] Info of user " + req.params.userId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] Info of user " + req.params.userId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] Info of user " + req.params.userId);
    })

module.exports = router;