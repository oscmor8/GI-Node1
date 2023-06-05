const express = require("express");
const fs = require("fs-extra");
const app = express();

const port = 9000;
app.use(express.json());

app.get("/employee", (req, res) => {
  fs.readJson("employee.json").then((data) => {
    res.json(data);
  });
});

app.get("/employee/:id", (req, res) => {
  const employeeID = parseInt(req.params.id);

  fs.readJson("employee.json").then((data) => {
    const employee = data.find((emp) => emp.employeeID === employeeID);

    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
