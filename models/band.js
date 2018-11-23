const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create Band schema and model
const bandSchema = new schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"]
  },
  genre: {
    type: String,
    required: [false]
  },
  stillActive: {
    type: Boolean,
    default: true
  }
  //add some other property. geo location for the ninjas example
});

const Band = mongoose.model('band', bandSchema);

model.exports = Band;
