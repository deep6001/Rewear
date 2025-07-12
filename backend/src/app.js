require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const logger = require("./utils/logger.js");
const { determineLogLevel } = require("./utils/logLevel.js");
const morgan = require("morgan");
const route = require("./routes/index.js");
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandler.js");
const  fileUpload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors')
// const { startBackgroundJob } = require("./services/bookingService.js");
if (!fs.existsSync('./tmp')) {
  fs.mkdirSync('./tmp');
}
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler);
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './tmp/'
}))
const morganFormat =
  ":method :url :status :res[content-length] :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        // Example message: 'GET / 200 - 2.345 ms'
        const [method, url, statusCode] = message.trim().split(" ");

        // Dynamically set log level based on HTTP status code
        const level = determineLogLevel(parseInt(statusCode));
        logger.log({ level, message: message });
      },
    },
  })
);
app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use("/api", route);
// startBackgroundJob();
module.exports = { app };
