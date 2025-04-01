document.addEventListener("DOMContentLoaded", function (){
    var buttons = document.querySelectorAll("td");
    function playClick(){
        console.log("Playing");
        var audio = new Audio("./sound/click.mp3");
        audio.play();
    }
    
    for (var btn of buttons){
        btn.onclick = playClick;
    }
})
