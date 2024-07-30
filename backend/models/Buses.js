const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusSchema = new Schema(
  {
    date: {
      type: String,
    },
    nameData: {
      type: String,
    },
    reservedSeats: {
      type: String,
    },
    start: {
      type: String,
    },
    destination: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    totalSeats: {
      type: String,
    },
    availableSeats: {
      type: String,
    },
    pricePerSeat: {
      type: String,
    },
  },
  { collection: "buses" }
);

const bus = mongoose.model("bus", BusSchema);

module.exports = bus;
