let express = require('express');
let router = express.Router();
let fs = require('fs');

router.post('/:artist',function (req,res) {
   let dir = "/home/Desktop/music/"
             +req.params.artist ;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        res.sendStatus(201);

    }else {
        res.sendStatus(409);
    }
});

router.post('/:artist/:album',function (req,res) {
   let dir = "/home/Desktop/music/"
             +req.params.artist+"\\"
             +req.params.album;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        res.sendStatus(201);

    }else {
        res.sendStatus(409);
    }
});

router.post('/:artist/:album/:song',function (req,res) {
   let dir = "/home/Desktop/music/"
             +req.params.artist+"/"
             +req.params.album+"/"
             +req.params.song;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        res.send(201);
        res.status(409);
    }else {
        res.status(409);
        res.send("Already exists");
    }
});


module.exports = router;