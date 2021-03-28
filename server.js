const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/tickets", require("./routes/api/tickets"));
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
