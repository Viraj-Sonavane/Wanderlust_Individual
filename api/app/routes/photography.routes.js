module.exports = app => {
    const photography = require("../controllers/photography.controller.js");

    var router = require("express").Router();

    // Create a new photography location
    router.post("/", photography.create);

    // Retrieve all photography location
    router.get("/", photography.findAll);

    // Retrieve a single location with id
    router.get("/:id", photography.findOne);

    // Update a photography description with id
    router.put("/:id", photography.update);

    // Delete a Photography location with id
    router.delete("/:id", photography.delete);

    //  Delete all Photography location 
    router.delete("/", photography.deleteAll);

    app.use('/api/photography', router);
  };