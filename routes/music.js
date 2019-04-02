let express = require('express');
let router = express.Router();
let fs = require('fs');
let fileUpload = require('express-fileupload');

router.post('/:artist',function (req,res) {
   let dir = "/home/revan2345/Desktop/music/"
             +req.params.artist ;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        res.sendStatus(201);

    }else {
        res.sendStatus(409);
    }
});

router.post('/:artist/:album',function (req,res) {
   let dir = "/home/revan2345/Desktop/music/"
             +req.params.artist+"/"
             +req.params.album;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        res.sendStatus(201);

    }else {
        res.sendStatus(409);
    }
});

router.post('/:artist/:album/:song',function (req,res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
   let song = req.files.song;
song.mv('/home/revan2345/Desktop/music/'+req.params.artist+"/"+
					 req.params.album+"/"+
					 song.name
, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

/*
   let dir = "/home/revan2345/Desktop/music/"
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
    }*/
});


module.exports = router;