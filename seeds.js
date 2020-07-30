var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image:  "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus aliquam metus a ultrices. Etiam dictum molestie augue, id rutrum justo accumsan a. Duis eget eros scelerisque, bibendum mi sit amet, gravida purus. Mauris posuere condimentum justo, eu scelerisque nibh condimentum ac. Sed egestas malesuada pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin blandit ornare libero, vel auctor lectus finibus ut. Proin viverra purus id ipsum lobortis elementum. Vestibulum vitae dolor varius, cursus nisi sed, rutrum metus."
  },
  {
    name: "Desert Mesa",
    image:  "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus aliquam metus a ultrices. Etiam dictum molestie augue, id rutrum justo accumsan a. Duis eget eros scelerisque, bibendum mi sit amet, gravida purus. Mauris posuere condimentum justo, eu scelerisque nibh condimentum ac. Sed egestas malesuada pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin blandit ornare libero, vel auctor lectus finibus ut. Proin viverra purus id ipsum lobortis elementum. Vestibulum vitae dolor varius, cursus nisi sed, rutrum metus."
  },
  {
    name: "Canyon Floor",
    image:  "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus aliquam metus a ultrices. Etiam dictum molestie augue, id rutrum justo accumsan a. Duis eget eros scelerisque, bibendum mi sit amet, gravida purus. Mauris posuere condimentum justo, eu scelerisque nibh condimentum ac. Sed egestas malesuada pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin blandit ornare libero, vel auctor lectus finibus ut. Proin viverra purus id ipsum lobortis elementum. Vestibulum vitae dolor varius, cursus nisi sed, rutrum metus."
  }
]

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log("removed");
    //Add a few campground
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if (err) {
          console.log(err);
        } else {
          console.log("added");
          //Create comment
          Comment.create(
            {
              text: "some comment",
              author: "Homer"
            }, function(err, comment){
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("create new comment");
              }
            });
        }
      });
    });
  });
}

module.exports = seedDB;
