var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
 // res.send('respond with a resource');
  res.json([
    {
        id: 0,
        profile: "John",
        postUrl: "https://image.cnbcfm.com/api/v1/image/105968984-1560512308328rtx6z8xn.jpg?v=1612540577&w=740",
        caption: "Sutta hai kya?"
},
{
    id: 1,
    profile: "Josh",
    postUrl: "https://image.cnbcfm.com/api/v1/image/105968984-1560512308328rtx6z8xn.jpg?v=1612540577&w=740",
    caption: "Sutta hai kya?"
},
{
id: 2,
profile: "Likpa",
postUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
caption: "Sutta hai kya?"
}


]);
})



module.exports = router;