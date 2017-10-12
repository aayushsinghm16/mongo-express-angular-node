var express = require('express');
var router = express.Router();
var multer =require('multer');
var upload = multer({dest:'upload/'})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',upload.single('image') ,function(req, res, next) {
  console.log(req.file);
  //console.log(req.body);
  res.render('index', { title: req.body.text });
});

module.exports = router;
