import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  photo: String,
  age: Number,
  gender: String,
  balance: Number,
  cities: Array,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('person', personSchema);
