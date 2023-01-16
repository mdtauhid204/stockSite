require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const authrouter = require("./routes/user");
const companyrouter = require("./routes/company");
const client = require("./routes/client");
const { join } = require("path");
const cors = require("cors");

connectDB();
app.use(cors());
app.use(express.static("public"));
const publicFolder = join(__dirname, "client", "build");
app.use("/", express.static(publicFolder));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", authrouter);
app.use("/api", companyrouter);
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// if (process.env.NODE_ENV === "production") {
//     // app.use(express.static("client/build"));
//     app.use(client);
// }

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`server is running on port ${port}`);
});
