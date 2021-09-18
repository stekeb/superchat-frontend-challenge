require("dotenv").config();
express = require("express");
app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const router = require("./router")


app.use(express.json());
app.use(cors());
app.use(router)


app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`)