const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const methodOverride = require("method-override");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

// Middleware untuk method override
app.use(methodOverride("_method"));

// Setting EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");

// Routes
const zooRoutes = require("./routes/zooRoutes");
app.use("/", zooRoutes);

app.get("/zoos", (req, res) => {
  res.redirect("/");
});

const bodyParser = require("body-parser");
const sequelize = require("./database/db");
const Zoo = require("./models/zoo");

app.use(bodyParser.json());

(async () => {
  try {
    await sequelize.sync({ force: true }); // Sync database
    console.log("Database connected and synced!");
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000")
    );
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();
