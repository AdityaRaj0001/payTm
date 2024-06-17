const express = require("express");
const rootRouter = require("./routes/index");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
app.use("/api/v1", rootRouter);

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })