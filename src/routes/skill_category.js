const express = require("express");
let router = express.Router();

router.route("/skillCategory")
    .get((req, res) => {
        res.send("[GET METHOD] skillCategory");
    })
    .post((req, res) => {
        res.send("[POST METHOD] skillCategory");
    });

router.route("/skillCategory/:skillCategoryId")
    .get((req, res) => {
        res.send("[GET METHOD] skillCategory " + req.params.skillCategoryId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] skillCategory " + req.params.skillCategoryId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] skillCategory " + req.params.skillCategoryId);
    })

module.exports = router;