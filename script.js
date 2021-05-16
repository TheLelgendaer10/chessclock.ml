var player1Time = 0;
var player2Time = 0;
var playerSwitch = true;

function letsGo() {
    player2Time = document.getElementById("timeInput2").value;
    player1Time = document.getElementById("timeInput").value;

    if(!player1Time.match(/\d\d?:[0-5]?[0-9]:[0-5]?[0-9]/) || !player2Time.match(/\d\d?:[0-5]?[0-9]:[0-5]?[0-9]/)) {
        if (!player1Time.match(/\d\d?:[0-5]?[0-9]:[0-5]?[0-9]/)) {
            document.getElementsByClassName("timeInput")[0].classList.add("invalid");
        }
        if (!player2Time.match(/\d\d?:[0-5]?[0-9]:[0-5]?[0-9]/)) {
            document.getElementsByClassName("timeInput")[1].classList.add("invalid");
        }
        return
    } 

    document.getElementsByTagName("form")[0].remove();
    document.getElementsByTagName("form")[0].remove();
    document.getElementsByTagName("button")[0].remove();

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.id = "mainDiv";

    mainDiv.appendChild(div1); 
    mainDiv.appendChild(div2);

    div1.innerHTML = player1Time;
    div1.className = "active";
    div1.id = "div1timerText";
    div2.innerHTML = player2Time;
    div2.className = "timerText";
    div2.id = "div2timerText";

    const switchBtn = document.createElement("button");
    switchBtn.id = "switchBtn";
    switchBtn.onclick = function() {
        playerSwitch = !playerSwitch
        if (div1.classList.contains("active")) {
            div1.classList.remove("active");
            div1.classList.add("timerText");
            div2.classList.add("active");
            div2.classList.remove("timerText");
        } else {
            div2.classList.remove("active");
            div2.classList.add("timerText");
            div1.classList.add("active");
            div1.classList.remove("timerText");
        }
    };
    mainDiv.appendChild(switchBtn);
    
    setInterval(function() {
        updateTimer(div1, div2)
    }, 1000)
};

function updateTimer(div1, div2) {
    if (playerSwitch) {
    var time = div1.innerHTML.split(":");
    
    div1.innerHTML = secondToTime(timeToSecond(time) - 1).join(":");
    console.log(div1.innerHTML);
    } else {
        var time = div2.innerHTML.split(":");
    
        div2.innerHTML = secondToTime(timeToSecond(time) - 1).join(":");
        console.log(div2.innerHTML);
    }
};

function timeToSecond(time) {
    return 3600 * time[0] + 60 * time[1] + time[2] * 1;
};

function secondToTime(time) {
    const hour = Math.floor(time / 3600);
    time = time % 3600;
    
    const minute = Math.floor(time / 60);
    time = time % 60;

    return [hour, minute, time];
};