const router = require("express").Router();
const { createEntry, getOne } = require("./controller/controller");

router.post("", createEntry);

router.get("/:nanoId", getOne);

module.exports = router;
