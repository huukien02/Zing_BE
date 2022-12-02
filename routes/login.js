var express = require('express');
var router = express.Router();
var db = require('../models/accout')

/* GET home page. */



router.post('/', function (req, res, next) {
    const acc = new db({
        username: req.body.username,
        password: req.body.password,
    })

    acc.save().then(() => {
        res.json("token")
    })
        .catch((err) => {
            if (err) throw err;
        });
});



module.exports = router;
