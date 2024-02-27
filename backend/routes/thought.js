const express = require("express");
const { createThoughts,getAllThought,getSingleThought,deleteThought,updateThought } = require("../controller/thoughtController");

const router = express.Router();

router.get("/",getAllThought);
router.post("/", createThoughts);
router.patch("/:id",updateThought);
router.delete("/:id",deleteThought);
router.get("/:id",getSingleThought);

module.exports = router;
