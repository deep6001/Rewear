require("dotenv").config({ path: "./.env" });
const { dbConn } = require("./config/dbconn.js");
const PORT = process.env.PORT || 3500;
const { app } = require("./app");

try {
  dbConn()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.error(error);
}
