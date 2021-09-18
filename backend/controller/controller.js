const Entrydata = require("../models/entrydata.model");

async function createEntry(req, res) {
  try {
    const { nanoId, user, repo, backColor, frameColor, icon } = req.body;
    const newEntry = await Entrydata.create({
      nanoId,
      user,
      repo,
      backColor,
      frameColor,
      icon,
    });
    res.status(201);
    res.json(newEntry);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getOne(req, res) {
  try {
    const { nanoId } = req.params;
    const resEntry = await Entrydata.findOne({
      where: {
        nanoId: nanoId,
      },
    });
    res.status(201);
    res.json(resEntry);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = { createEntry, getOne };
