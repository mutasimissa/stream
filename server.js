const port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const swagger = require('swagger-ui-express')
const oasJSON = require('./swagger.json')
const app = express();
const middleware = require("./middleware");
const api = require("./api");

app.use(cors());
app.use(express.json());
app.use("/api/docs", swagger.serve, swagger.setup(oasJSON))
app.use("/api", api);
app.use(middleware.notFound);
app.use(middleware.error);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server Running on: ${port}`);
  /* eslint-enable no-console */
});
