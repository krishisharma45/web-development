var arr = [".p1", ".p2"];
var list = [];
var player = "Alex";

var setPlayer = document.querySelector("#player").innerHTML = player;

function setContent() {
    for (i = 0; i < arr.length; i++) {
        var dice = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
        var refresh = document.querySelector(arr[i]).setAttribute("src", dice);
    }
    return refresh;
}

function setWinner() {

    for (i = 0; i < arr.length; i++) {
        var tag = document.querySelector(arr[i]).getAttribute("src");
        var num = tag.match(/\d/g);
        var int = num.join("");
        list.push(int);
    }
    return list;
}

document.querySelector(".container").onclick = function displayWinner() {
    setContent();
    setWinner();
    if (list[0] > list[1]) {
        document.querySelector(".container h1").innerHTML = "Krishi Wins!";
    }
    else if (list[0] < list[1]) {
        document.querySelector(".container h1").innerHTML = player + " Wins!";
    }
    else {
        document.querySelector(".container h1").innerHTML = "Krishi and " + player + " Win!";
    }
    list = [];
}
