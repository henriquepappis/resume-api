const express = require("express");
let router = express.Router();

router.route("/info")
    .get((req, res) => {
        res.send("[GET METHOD] User info");
    })
    .post((req, res) => {
        res.send("[POST METHOD] User info");
    });

router.route("/info/:userId")
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