const express = require("express");
const cars = require("./data");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ estended: false }));

// menampilkan data
app.get("/api/data-mobil", (req, res) => {
  res.status(200).json(cars);
});

// menampilkan data by id
app.get("/api/data-mobil/:id", (req, res) => {
  const car = cars.find((e) => e.id === Number(req.params.id));
  res.status(200).json(car);
});

// Create data
app.post("/api/data-mobil", (req, res) => {
  const { merk, jenis, ckd } = req.body;

  const lastId = cars[cars.length - 1].id;
  const newId = lastId + 1;

  const car = {
    id: newId,
    merk: merk,
    jenis: jenis,
    ckd: ckd,
  };

  cars.push(car);

  res.status(201).json(car);
});

// update data
app.put("/api/data-mobil/:id", (req, res) => {
  const { merk, jenis, ckd } = req.body;

  const indexCar = cars.findIndex((e) => e.id === Number(req.params.id));

  cars[indexCar] = {
    id: Number(req.params.id),
    merk: merk,
    jenis: jenis,
    ckd: ckd,
  };
  res.status(200).json(cars[indexCar]);
});

app.delete("/api/data-mobil/:id", (req, res) => {
  const indexCar = cars.findIndex((e) => e.id === Number(req.params.id));

  cars.splice(indexCar, 1);

  res.status(200).json({
    message: `data id ${req.params.id} is deleted`,
  });
});

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
