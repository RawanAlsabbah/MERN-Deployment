const PirateController = require("../controllers/pirate.controller");
// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
  app.post("/pirate", PirateController.createPirate);
  app.get("/pirate", PirateController.getAll);
  app.get('/pirate/:id', PirateController.getPirate);
  app.put('/pirate/:id', PirateController.updatePirate);
  app.delete('/pirate/:id', PirateController.deletePirate);


};