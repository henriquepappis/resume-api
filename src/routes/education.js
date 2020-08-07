const express = require("express");
let router = express.Router();

router.route("/education")
    .get((req, res) => {
        res.send("[GET METHOD] Education");
    })
    .post((req, res) => {
        res.send("[POST METHOD] Education");
    });

router.route("/education/:educationId")
    .get((req, res) => {
        res.send("[GET METHOD] Education " + req.params.educationId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] Info of user " + req.params.educationId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] Info of user " + req.params.educationId);
    })

module.exports = router;