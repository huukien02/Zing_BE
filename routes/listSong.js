var express = require('express');
var router = express.Router();
var db = require('../models/listSong')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.find({}, (err, docs) => {
        res.json(docs)
    })
});

router.get('/:id', function (req, res, next) {
    db.find({ _id: req.params.id }, (err, docs) => {
        res.json(docs)
    })
});

router.get('/page/:id', function (req, res, next) {


    var page = Number(req.params.id)

    /* Lấy 2 phần tử mỗi trang */
    const PAGE_SIZE = 2
    const NEXT = (page - 1) * PAGE_SIZE

    db.find({})
        .skip(NEXT)
        .limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err);
        })


});



router.post('/post', function (req, res, next) {
    const song = new db({
        img: req.body.img,
        date: req.body.date,
        name: req.body.name,
        author: req.body.author,
        url: req.body.url,
    })

    song.save().then(() => {
        res.json("Thêm thành công")
    })
        .catch((err) => {
            if (err) throw err;
        });
});



module.exports = router;
