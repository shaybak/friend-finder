// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // Your `htmlRoutes.js` file should include two routes:


    // A GET Route to `/survey` which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // A default, catch-all route that leads to `home.html` which displays the home page.
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};