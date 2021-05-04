var express = require('express');
var router = express.Router();
const Post = require("../model/Post") 
var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

 router.get("/data", async (req, res) => {
	const posts = await Post.find()
	res.send(posts)
});

router.post("/posts", async (req, res) => {
	var post = new Post({
		propic: req.body.propic,
		url: req.body.url,
    caption: req.body.caption
	})

	console.log(JSON.stringify(post.propic));
	await post.save()
	res.send('saved')
});



module.exports = router;
