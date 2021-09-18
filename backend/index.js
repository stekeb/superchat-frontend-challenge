require("dotenv").config();
express = require("express");
app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`)