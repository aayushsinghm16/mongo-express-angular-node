var express = require('express');
var router = express.Router();
var multer =require('multer');
var upload = multer({dest:'upload/'}) //this will create body object that can handle file requests
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',upload.single('image') ,function(req, res, next) {
  //refrence string in upload.single should be same name attribute in html ,like i have input(type=file,name=image)

  console.log(req.file);//req.file contains all data related to file u can see it in your server console 
  //console.log(req.body);
  res.render('index', { title: req.body.text });
});

module.exports = router;
