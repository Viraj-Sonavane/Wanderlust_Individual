const db = require("../models");
const Photograph = db.photograph;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.photographyPlace) {
      res.status(400).send({ message: "Cannot be empty!" });
      return;
    }

    const photography = new Photograph({
      photographyPlace: req.body.photographyPlace,
      photographyDescription: req.body.photographyDescription,
      photographyReview: req.body.photographyReview,
      photographyAddress: req.body.photographyAddress,
      isOpen: req.body.isOpen ? req.body.isOpen : false
    });

    photography
      .save(photography)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || " Error in creating the photography location."
        });
      });
  };

  exports.findAll = (req, res) => {
 //   const photographyPlace = req.query.photographyPlace;
   // const photographyAddress = req.query.photographyAddress;
    //var condition = photographyPlace ? { photographyPlace: { $regex: new RegExp(photographyPlace), $options: "i" } } : {};
    Photograph.find({})
      .then(data => {
        console.log("sdsd");
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Cannot retrieving photography Location."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
    Photograph.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No Photography Location with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({ 
            message: 
              "Error getting Photography Location with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Cannot be empty!"
      });
    }
    const id = req.params.id;
    Photograph.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: 
              `Cannot update Photography Location with id=${id}`
          });
        } else res.send({ 
            message: 
              "Photography Location was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: 
            "Error updating Photography Location with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;

    Photograph.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: 
                `Cannot delete Photography Location with id=${id}`
          });
        } else {
          res.send({
            message: 
                "Photography Location was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
            "Error while deleting Photography Location with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Photograph.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Photography locations deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing."
        });
      });
  };