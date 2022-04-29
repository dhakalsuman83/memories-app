const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/posts.js");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //the image could be large so we have initialized the limit for the image
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/", (req, res) => {
  res.json({ msg: "The route is not valid" });
});

const CONNECTION_URL =
  "mongodb+srv://dhakalsuman:suman12345@cluster0.rnu3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
