const express = require("express");
let router = express.Router();

router.route("/employment")
    .get((req, res) => {
        res.send("[GET METHOD] Employment");
    })
    .post((req, res) => {
        res.send("[POST METHOD] Employment");
    });

router.route("/employment/:employmentId")
    .get((req, res) => {
        res.send("[GET METHOD] Employment " + req.params.employmentId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] Employment " + req.params.employmentId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] Employment " + req.params.employmentId);
    })

module.exports = router;