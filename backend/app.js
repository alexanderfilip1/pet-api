var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
};

var indexRouter = require("./routes/index");
var registerApi = require("./routes/registerApi");
var loginApi = require("./routes/loginApi");
var animalsApi = require("./routes/animalsApi");

var app = express();
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/register", registerApi);
app.use("/api/login", loginApi);
app.use("/api/animal", animalsApi);

module.exports = app;
