// utk manggil express
const express = require("express");
// express dismpan di app
const app = express();
const routes = require("./routes")
// utk manggil css di folder public
const path = require("path");

// set view engine berupa ejs
app.set("view engine", "ejs")
// manggil variabel path
app.use(express.static(path.join(__dirname)))

// manggil middleware itu jembatan kayak satpam di mall
app.use("/", routes)


// utk jalanin server
// app listen menerima dua parameter; port dan callback
app.listen(8000, () => {
    console.log("server running on port 8000")
})
