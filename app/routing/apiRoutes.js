// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // Your `apiRoutes.js` file should contain two routes:

  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;
    var scoresArray = [];
    var bestMatch = 0;

    for (var i = 0; i < friendsArray.length; i++) {
      var scoreDiff = 0;

      for (var j = 0; j < newFriendScores.length; j++) {
        scoreDiff += Math.abs(
          parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])
        );
      }
      scoresArray.push(scoreDiff);
    }
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    var besties = friendsArray[bestMatch];
    res.json(besties);

    console.log(besties);

    friendsArray.push(newFriend);
  });
};
