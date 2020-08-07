const express = require("express");
let router = express.Router();

router.route("/social")
    .get((req, res) => {
        res.send("[GET METHOD] Social");
    })
    .post((req, res) => {
        res.send("[POST METHOD] Social");
    });

router.route("/social/:socialId")
    .get((req, res) => {
        res.send("[GET METHOD] Social " + req.params.socialId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] Social " + req.params.socialId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] Social " + req.params.socialId);
    });

module.exports = router;