
var express = require('express');
var router = express.Router();

router.post("/",  (req, res) => {
	res.json([
		{
			id: 0,
			profile: "John",
			message: "Sutta hai kya?"
	},
	{
		id: 1,
		profile: "Josh",
		message: "Sutta hai kya?"
	},
	{
	id: 2,
	profile: "Likpa",
	message: "Sutta hai kya?"
	}
	
	
	]);
});

module.exports = router;

