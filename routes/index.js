const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));// TODO: update this when we merge with the client folder + front end
// }); // TODO: Try to see if this syntax is correct...

module.exports = router;
