const appRoutes = require("./routes/index");
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/image",express.static("public/images"));
// app.use(express.static("static"));

app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});