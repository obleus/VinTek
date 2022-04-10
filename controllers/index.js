const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboard-routes.js");
const successRoutes = require("./success-routes");

router.use("/dashboard", dashboardRoutes);
router.use("/success", successRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
