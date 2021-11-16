const express = require("express");
const db = require("./config/connection");
const routes = require("./routes/index");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

// needed to allow connection between express and react app
app.options('*', cors())

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes, cors());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
