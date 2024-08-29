const appRoutes = require("./routes/index");
const express = reqiure("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("static"));

app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log("Server has started");
});
