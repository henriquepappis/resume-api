const express = require("express");
let router = express.Router();

router.route("/skill")
    .get((req, res) => {
        res.send("[GET METHOD] Skill");
    })
    .post((req, res) => {
        res.send("[POST METHOD] Skill");
    });

router.route("/skill/:skillId")
    .get((req, res) => {
        res.send("[GET METHOD] Skill " + req.params.skillId);
    })
    .put((req, res) => {
        res.send("[PUT METHOD] Skill " + req.params.skillId);
    })
    .delete((req, res) => {
        res.send("[DELETE METHOD] Skill " + req.params.skillId);
    })

module.exports = router;