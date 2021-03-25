const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Open",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Ticket = mongoose.model("ticket", TicketSchema);

module.exports = Ticket;
