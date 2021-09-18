require("dotenv").config();
express = require("express");
app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const router = require("./router");
const sequelize = require("./models/index");

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
  try {
    await sequelize.sync();
    console.log("Connection to DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to DB", error);
  }
})();
app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`);
