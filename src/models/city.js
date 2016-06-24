import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photos: Array,
  costToVisit: Number,
  country: String,
  people: Array,
  balance: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('city', citySchema);
