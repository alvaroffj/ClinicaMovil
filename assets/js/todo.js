$(document).ready(function() {
    var $btn = $("#btn"),
    	$txt = $("#txt"),
    	$lab = $("#label");

    $btn.on("click", function() {
        $lab.html($txt.val());
        return false;
    });
});

// $(document).ready(function() {

// });