
const express = require("express");
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("HunarHub Backend Running ");
});

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});