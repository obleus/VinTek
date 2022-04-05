const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
