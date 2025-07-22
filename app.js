// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     res.write("get Method!");
//     res.end();
//   } else if (req.method === "post") {
//     res.write("post method!");
//     res.end();
//   } else {
//     res.write("Am listning to port 3000");
//     res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("server is listning to port 3000");
// });

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Payroll").then(() => {
  console.log("mongodb connected");
});
const employeesRoute = require("./routes/employee.route");
app.use("/employee", employeesRoute);

app.all("/test", (req, res) => {
  //   console.log(req.params);
  //   res.send(req.paramse);
  console.log(req.body);
  res.send(req.body);
});
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
// app.get("/", (req, res, next) => {
//   console.log(req.url);
//   console.log(req.method);
//   res.send("am the route");
// });
// app.post("/", (req, res, next) => {});
// app.delete("/", (req, res, next) => {});
app.listen(3000, () => {
  console.log("app running--");
});
