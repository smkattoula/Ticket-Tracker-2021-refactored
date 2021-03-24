const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
