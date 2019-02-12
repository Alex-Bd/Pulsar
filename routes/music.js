var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/artist',function (req,res) {
    var dir = "C:\\Sync\\db\\public\\Music\\"+req.body.artist;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    res.send("done")

});


module.exports = router;