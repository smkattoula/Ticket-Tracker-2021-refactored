const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();

const Ticket = require("../../models/Ticket");

// Route: GET api/tickets
// Description: Get all tickets
// Access: Private

router.get("/", auth, async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id }).sort({ date: -1 });

    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: GET api/tickets/:id
// Description: Get a single ticket
// Access: Private

router.get("/:id", auth, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket does not exist" });
    }

    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: POST api/tickets
// Description: Create a new ticket
// Access: Private

router.post("/", auth, async (req, res) => {
  try {
    const { subject, category, priority, description, status } = req.body;

    const newTicket = new Ticket({
      user: req.user.id,
      subject: subject,
      category: category,
      priority: priority,
      description: description,
      status: status,
    });

    if (!newTicket) {
      return res
        .status(400)
        .json({ message: "Please enter all required fields" });
    }

    const ticket = await newTicket.save();
    res.json(ticket);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: UPDATE api/tickets/update/:id
// Description: Update an existing ticket
// Access: Private

router.put("/update/:id", auth, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    const { subject, category, priority, description, status, date } = req.body;

    (ticket.subject = subject),
      (ticket.category = category),
      (ticket.priority = priority),
      (ticket.description = description),
      (ticket.status = status),
      (ticket.date = date);

    const updatedTicket = ticket.save();
    res.json({ message: "Ticket updated!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Route: DELETE api/tickets/:id
// Description: Delete an existing ticket
// Access: Private

router.delete("/:id", auth, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket no longer exists" });
    }

    // Validation to check if movie in watchlist belongs to user
    if (ticket.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const deleteTicket = await Ticket.findByIdAndRemove(req.params.id);
    res.json({ message: "Ticket deleted!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
