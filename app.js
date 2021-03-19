const express = require("express");

// Set up application
const app = express();

//Pack for reading environmental variables
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

//Set up server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });

//Design, set up view engine
app.set("view engine", "ejs");
//app.use("/static", express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

/* Router Setup */

/* Index - Home */
const indexRouter = require("./routes/index");
app.use("/routes/index", indexRouter);

//Define routes in app
app.use("/", indexRouter);