document.addEventListener("DOMContentLoaded", function (){
    var buttons = document.querySelectorAll("td");
    function buttonPress(){
        console.log("Playing");
        var audio = new Audio("./sound/click.mp3");
        audio.play();

        document.getElementById("display").innerHTML = event.target.id
    }
    
    for (var btn of buttons){
        btn.onclick = buttonPress;
    }
})
