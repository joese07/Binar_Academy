const express = require("express");

const app = express();
const port = 8080;
const jadwalPelajaran = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/register-matpel", (req, res) => {
  res.render("register-matpel");
});

app.post("/register-matpel", (req, res) => {
  const kodeMatpel = req.body.kode_matpel;
  const namaMatpel = req.body.nama_matpel;
  const tanggalMatpel = req.body.tanggal_matpel;
  const namaGuru = req.body.nama_guru;

  jadwalPelajaran.push({
    kodeMatpel: kodeMatpel,
    namaMatpel: namaMatpel,
    tanggalMatpel: tanggalMatpel,
    namaGuru: namaGuru,
  });

  console.log(jadwalPelajaran);

  res.redirect("/tampilkan-data");
});

app.get("/tampilkan-data-json", (req, res) => {
  res.json(jadwalPelajaran);
});

app.get("/tampilkan-data", (req, res) => {
  res.render("tampilan-data", {
    jadwalPelajaran,
  });
});

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
