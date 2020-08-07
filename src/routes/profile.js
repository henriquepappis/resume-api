const express = require("express");
let router = express.Router();

router.route("/profile")
    .get((req, res) => {
        res.send("[GET METHOD] Profile");
    })
    .post((req, res) => {
        res.send("[POST METHOD] Profile");
    });

router.route("/profile/:profileId")
    .get((req, res) => {
        res.send("[GET METHOD] Profile " + req.params.profileId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] Profile " + req.params.profileId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] Profile " + req.params.profileId);
    })

module.exports = router;