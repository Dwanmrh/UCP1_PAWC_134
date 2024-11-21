function validateAnimalData(req, res, next) {
  const { name, species, age, habitat } = req.body;

  if (!name || !species || !age || !habitat) {
    return res.status(400).send("All fields are required!");
  }
  if (typeof age !== "number" || age <= 0) {
    return res.status(400).send("Age must be a positive number.");
  }
  next();
}

module.exports = { validateAnimalData };
