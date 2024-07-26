
const colors=["red", "green", "blue", "yellow","orange","white"];
const size=colors.length;
$(document).ready(function() {
    $("#btn").click(function(){
        $("body").css("background-color",colors[Math.floor(Math.random()*size)])
    })
});