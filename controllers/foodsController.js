var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var food = require("../models/food.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
//call the all function, pass a callback function to use in foods.js
//the call back function is sent in a callback function with the results from
//foods js into orm.js
  food.all(function(data) {
    var hbsObject = {
      foods: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  food.create([
    "name", "added"
  ], [
    req.body.name, req.body.added
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.update({
    added: req.body.added
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  food.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
