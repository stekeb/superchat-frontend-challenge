const router = require("express").Router();
const { createEntry, findOne } = require("./controller/controller")

router.post("", createEntry)

router.get("/:nanoId", findOne)

module.exports = router