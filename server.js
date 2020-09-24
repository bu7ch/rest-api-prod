//configuration de base
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 4567;

// -----------------------------------------------------------
const errorHandler = require("./middlewares/errorHandler");
const postRoutes = require("./routes/post");

app.use(cors());
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/rest-estiam-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB is OK!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler);
app.use("/api/post", postRoutes);

app.listen(port, () => console.log(`Application is running on port : ${port}`));
