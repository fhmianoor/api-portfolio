const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const router = require("./routes/index.js");
dotenv.config();
const app = express();
const path = require("path");

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/about",
  express.static(path.join(__dirname, "./assets/about"), {
    setHeaders: (res, path) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
app.use(
  "/certificates",
  express.static(path.join(__dirname, "./assets/certificate"), {
    setHeaders: (res, path) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
// app.use(
//   "/testimonials",
//   express.static(path.join(__dirname, "./assets/testimonial"), {
//     setHeaders: (res, path) => {
//       res.set("Cross-Origin-Resource-Policy", "cross-origin");
//     },
//   })
// );


app.use("/api", router);

module.exports = app;