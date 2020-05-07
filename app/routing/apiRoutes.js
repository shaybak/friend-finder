// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


var friendsArray = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {


    // Your `apiRoutes.js` file should contain two routes:

    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware

        friendsArray.push(req.body);
        res.json(true);

    });


}