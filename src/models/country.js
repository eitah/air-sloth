import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  photos: Array,
  cities: Array,
  balance: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('country', countrySchema);
