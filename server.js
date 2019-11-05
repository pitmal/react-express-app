const express = require("express");
const app = express();
const port = 5000;
app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Janusz", lastName: "Szczepaniak" },
    { id: 2, firstName: "Grażyna", lastName: "Trzaskowska" },
    { id: 3, firstName: "Szczepan", lastName: "Mieczykowski" }
  ];
  res.json(customers);
});
app.listen(
  port,
  console.log(`Server is listening on http://localhost:${port}`)
);
