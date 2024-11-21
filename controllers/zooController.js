const Zoo = require("../models/zoo");

exports.index = async (req, res) => {
  try {
    const animals = await Zoo.findAll(); // Ambil data dari database
    res.render("zoo/index", { title: "Animal List", animals });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// GET
exports.createForm = (req, res) => {
  res.render("zoo/create", { title: "Add Animal" });
};

exports.store = async (req, res) => {
  try {
    const { name, species, age, habitat } = req.body;
    await Zoo.create({ name, species, age, habitat }); // Simpan ke database
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to add animal");
  }
};

// EDIT
exports.edit = async (req, res) => {
  try {
    const animal = await Zoo.findByPk(req.params.id);
    if (!animal) {
      return res.status(404).send("Animal not found");
    }
    res.render("zoo/edit", { title: "Edit Animal", animal });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const { name, species, age, habitat } = req.body;
    const animal = await Zoo.findByPk(req.params.id);

    if (!animal) {
      return res.status(404).send("Animal not found");
    }

    // Update data
    await animal.update({ name, species, age, habitat });

    // Redirect kembali ke halaman utama
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update animal");
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    const animal = await Zoo.findByPk(req.params.id);
    if (!animal) {
      return res.status(404).send("Animal not found");
    }

    await animal.destroy();
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
