$(document).ready(function() {
    console.log("working");

$("#submit").on("click", function(event) {
    event.preventDefault();


    var newFriend = {
        name: $("#name").val().trim(),
        image: $("#photo").val().trim(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

    console.log(newFriend);

    // $.post("/api/friends", newFriend,
    //     function(data) {
    //         // Clear the form when submitting
    //         $("#name").val("0");
    //         $("#photo").val("0");
    //         $("#q1").val("0");
    //         $("#q2").val("0");
    //         $("#q3").val("0");
    //         $("#q4").val("0");
    //         $("#q5").val("0");
    //         $("#q6").val("0");
    //         $("#q7").val("0");
    //         $("#q8").val("0");
    //         $("#q9").val("0");
    //         $("#q10").val("0");
    //     });

    // function calculateCompatibility() {
    //     var newFriendArray = newFriend.scores;

    //     for (i = 0; i < newFriendArray.length; i++) {
    //         var difference = 
    //     }
    // }

});
});