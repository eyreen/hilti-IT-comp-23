const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Equipment = require('./models/equipment');

const app = express();

mongoose.connect('mongodb://localhost/buildEase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.get('/equipment', (req, res) => {
  Equipment.find({})
    .then(equipment => {
      res.json(equipment);
    });
});

app.post('/equipment', (req, res) => {
  const newEquipment = new Equipment({
    name: req.body.name,
    usage: req.body.usage,
    maintenance: req.body.maintenance
  });
  newEquipment.save()
    .then(equipment => {
      res.json(equipment);
    });
});

app.listen(3000, () => {
  console.log('BuildEase site server started');
});
