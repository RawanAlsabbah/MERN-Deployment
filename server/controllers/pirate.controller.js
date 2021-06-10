const { Pirate } = require("../models/pirate.model");

module.exports = {
  createPirate: (req, res) => {
    Pirate.create(req.body).then((pirate) => {
      console.log("you have successfully created a thing");
      res.json(pirate)
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
  },
  getAll: (req, res) => {
    Pirate.find({})
      .then((pirate) => res.json(pirate))
      .catch((err) => res.status(400).json(err));
  },

getPirate: (req, res) => {
  Pirate.findOne({_id:req.params.id})
        .then(pirate => 
          {
            res.json(pirate)
          })
        .catch(err => {
          res.json(err)
          res.status(400).json(err);
        })
},

updatePirate : (request, response) => {
  Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatePirate => response.json(updatePirate))
        .catch(err => response.status(400).json(err));
},

deletePirate: (req, res) => {
  Pirate.deleteOne({ _id: req.params.id })
    .then((pirate) => res.json(pirate))
    .catch((err) => res.status(400).json(err));
},
};