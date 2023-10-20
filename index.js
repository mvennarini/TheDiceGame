document.query

// variabili per i cerchi
var d1 = document.querySelector("#d1"),
    d2 = document.querySelector("#d2"),
    d3 = document.querySelector("#d3"),
    d4 = document.querySelector("#d4"),
    d5 = document.querySelector("#d5"),
    d6 = document.querySelector("#d6"),
    d7 = document.querySelector("#d7"),
    d8 = document.querySelector("#d8"),
    d9 = document.querySelector("#d9"),


    // secondo dado
    d11 = document.querySelector("#d11"),
    d22 = document.querySelector("#d22"),
    d33 = document.querySelector("#d33"),
    d44 = document.querySelector("#d44"),
    d55 = document.querySelector("#d55"),
    d66 = document.querySelector("#d66"),
    d77 = document.querySelector("#d77"),
    d88 = document.querySelector("#d88"),
    d99 = document.querySelector("#d99");


function ranDado1() {
        var random = Math.random();
            random = random * 6;
            random = Math.floor(random)+1;
    
            if (random === 1) {
                d1.classList.add("hidden");
                d2.classList.add("hidden");
                d3.classList.add("hidden");
                d4.classList.add("hidden");
                d5.classList.remove("hidden");
                d6.classList.add("hidden");
                d7.classList.add("hidden");
                d8.classList.add("hidden");
                d9.classList.add("hidden");
            } else if (random === 2) {
                d1.classList.add("hidden");
                d2.classList.add("hidden");
                d3.classList.remove("hidden");
                d4.classList.add("hidden");
                d5.classList.add("hidden");
                d6.classList.add("hidden");
                d7.classList.remove("hidden");
                d8.classList.add("hidden");
                d9.classList.add("hidden");
            } else if (random === 3) {
                d1.classList.add("hidden");
                d2.classList.add("hidden");
                d3.classList.remove("hidden");
                d4.classList.add("hidden");
                d5.classList.remove("hidden");
                d6.classList.add("hidden");
                d7.classList.remove("hidden");
                d8.classList.add("hidden");
                d9.classList.add("hidden");
            } else if (random === 4) {
                d1.classList.remove("hidden");
                d2.classList.add("hidden");
                d3.classList.remove("hidden");
                d4.classList.add("hidden");
                d5.classList.add("hidden");
                d6.classList.add("hidden");
                d7.classList.remove("hidden");
                d8.classList.add("hidden");
                d9.classList.remove("hidden");
            } else if (random === 5) {
                d1.classList.remove("hidden");
                d2.classList.add("hidden");
                d3.classList.remove("hidden");
                d4.classList.add("hidden");
                d5.classList.remove("hidden");
                d6.classList.add("hidden");
                d7.classList.remove("hidden");
                d8.classList.add("hidden");
                d9.classList.remove("hidden");
            } else if (random === 6) {
                d1.classList.remove("hidden");
                d2.classList.add("hidden");
                d3.classList.remove("hidden");
                d4.classList.remove("hidden");
                d5.classList.add("hidden");
                d6.classList.remove("hidden");
                d7.classList.remove("hidden");
                d8.classList.add("hidden");
                d9.classList.remove("hidden");
            } 
            console.log(random + " 1")
            return random;
}


function ranDado2() {
    var random = Math.random();
        random = random * 6;
        random = Math.floor(random)+1;

        if (random === 1) {
            d11.classList.add("hidden");
            d22.classList.add("hidden");
            d33.classList.add("hidden");
            d44.classList.add("hidden");
            d55.classList.remove("hidden");
            d66.classList.add("hidden");
            d77.classList.add("hidden");
            d88.classList.add("hidden");
            d99.classList.add("hidden");
        } else if (random === 2) {
            d11.classList.add("hidden");
            d22.classList.add("hidden");
            d33.classList.remove("hidden");
            d44.classList.add("hidden");
            d55.classList.add("hidden");
            d66.classList.add("hidden");
            d77.classList.remove("hidden");
            d88.classList.add("hidden");
            d99.classList.add("hidden");
        } else if (random === 3) {
            d11.classList.add("hidden");
            d22.classList.add("hidden");
            d33.classList.remove("hidden");
            d44.classList.add("hidden");
            d55.classList.remove("hidden");
            d66.classList.add("hidden");
            d77.classList.remove("hidden");
            d88.classList.add("hidden");
            d99.classList.add("hidden");
        } else if (random === 4) {
            d11.classList.remove("hidden");
            d22.classList.add("hidden");
            d33.classList.remove("hidden");
            d44.classList.add("hidden");
            d55.classList.add("hidden");
            d66.classList.add("hidden");
            d77.classList.remove("hidden");
            d88.classList.add("hidden");
            d99.classList.remove("hidden");
        } else if (random === 5) {
            d11.classList.remove("hidden");
            d22.classList.add("hidden");
            d33.classList.remove("hidden");
            d44.classList.add("hidden");
            d55.classList.remove("hidden");
            d66.classList.add("hidden");
            d77.classList.remove("hidden");
            d88.classList.add("hidden");
            d99.classList.remove("hidden");
        } else if (random === 6) {
            d11.classList.remove("hidden");
            d22.classList.add("hidden");
            d33.classList.remove("hidden");
            d44.classList.remove("hidden");
            d55.classList.add("hidden");
            d66.classList.remove("hidden");
            d77.classList.remove("hidden");
            d88.classList.add("hidden");
            d99.classList.remove("hidden");
        } 
        console.log(random + " 1")
        return random;
}


function playGame() {
    var player1 = ranDado1();
    var player2 = ranDado2();
    
    if (player1 > player2) {
        document.querySelector("#title").innerHTML = "Guest 1 Win!";
    } else if (  player1 < player2) {
        document.querySelector("#title").innerHTML = "Guest 2 Win!";
    } else {
        document.querySelector("#title").innerHTML = "No Winner...";
    }
}


function resetGame() {
    //primo Dado
    d1.classList.add("hidden");
    d2.classList.add("hidden");
    d3.classList.add("hidden");
    d4.classList.add("hidden");
    d5.classList.add("hidden");
    d6.classList.add("hidden");
    d7.classList.add("hidden");
    d8.classList.add("hidden");
    d9.classList.add("hidden");
    //secondo Dado
    d11.classList.add("hidden");
    d22.classList.add("hidden");
    d33.classList.add("hidden");
    d44.classList.add("hidden");
    d55.classList.add("hidden");
    d66.classList.add("hidden");
    d77.classList.add("hidden");
    d88.classList.add("hidden");
    d99.classList.add("hidden");
    
    document.querySelector("#title").innerHTML = "The Dice Game";
}


var playButton = document.querySelector("#play");

    playButton.addEventListener("click", playGame)

var resetButton = document.querySelector("#reset");

    resetButton.addEventListener("click", resetGame)