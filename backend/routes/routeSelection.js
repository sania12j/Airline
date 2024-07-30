var express = require("express");
var router = express.Router();
var Bus = require("../models/Buses");
const passport = require("../config/passport");

// router.get('/', (req, res) => {
//     bus.find({ companyName, startCity, totalseats, availableseats }, (err, result) => {
//         if (err) res.send(err)
//         else res.json({ result })
//     })
// })

router.post("/", async (req, res) => {
  // const bus = await Bus.findOne({
  //   companyName: req.body.companyName,
  //   startCity: req.body.startCity,
  //   destination: req.body.destination,
  //   pricePerSeat: req.body.pricePerSeat,
  // });
  if (true) {
    const busRoute = await Bus.create({
      nameData: req.body.nameData,
      start: req.body.start,
      destination: req.body.destination,
      reservedSeats: req.body.reservedSeats,
      date: req.body.date,
    });
    res.status(200).json(busRoute);
  }
  // bus
  //   .find({ startCity: req.body.startCity, destination: req.body.destination })
  //   .exec((err, bus) => {
  //     if (err) {
  //       res.json({ status: false, message: "error while searching" });
  //     } else {
  //       console.log(bus);
  //       res.json({ bus });
  //     }
  //   });
});

// router.post("/", (req, res) => {
//   bus.findOne({ _id: req.body.bId }, (err, bus) => {
//     if (err) {
//       res.json({ status: false, message: "error while searching with ID" });
//     } else res.json({ bus });
//   });
// });

// router.post('/', (req, res) => {
//     let newBus = new bus(req.body)
//     newBus.save((err, bus) => {
//         if (err) console.log(err)
//         else res.status(201).json(bus)
//     })
// })

module.exports = router;
