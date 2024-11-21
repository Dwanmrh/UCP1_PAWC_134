const express = require("express");
const router = express.Router();
const zooController = require("../controllers/zooController");

// Route Read
router.get("/", zooController.index);
router.get("/zoo", zooController.index); // Alias untuk /zoo

// Route Create
router.get("/zoo/create", zooController.createForm);
router.post("/zoo", zooController.store);

// Route Update
router.get("/zoo/edit/:id", zooController.edit);
router.put("/zoo/:id", zooController.update);

// Route Delete
router.delete("/zoo/:id", zooController.delete);

module.exports = router;
