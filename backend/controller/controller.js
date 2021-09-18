
async function createEntry(req, res) {
    res.json("createentry")
}

async function findOne(req, res) {
    const {nanoId} = req.params
    res.json("findeOne " + nanoId)
}


module.exports = {createEntry, findOne}