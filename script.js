function start() {
    console.log("start");

    //vis startskærm

    document.querySelector("#start").classList.add("show");

    //start animation på start-knap
    document.querySelector("#start_knap").classList.add("pulse");

}

document.querySelector("#start").addEventListener("click", start);

document.querySelector("#start_knap").addEventListener("click", start);




function hideStart() {
    console.log("hideStart");

    //stop animation på start-knap

    document.querySelector("#start_knap").classList.add("hide");

    //fade startskærm ud

    document.querySelector("#start").classList.add("fade_out");

}

document.querySelector("#start_knap").addEventListener("click", hideStart);

document.querySelector("#start").addEventListener("click", hideStart);




function startGame() {
    console.log("startGame");

    //skjul startskærm

    document.querySelector("#start").classList.add("hide");


    //vis spilskærm

    document.querySelector("#game_background").classList.add("show");


    //start falling

    document.querySelector("#cigaretpakke").classList.add("falling");

    document.querySelector("#daase_graa").classList.add("falling");

    document.querySelector("#daase_orange").classList.add("falling");

    document.querySelector("#plastik").classList.add("falling");

    document.querySelector("#plastikflaske").classList.add("falling");

    document.querySelector("#plastikpose").classList.add("falling");

    document.querySelector("#solvpapir").classList.add("falling");

    document.querySelector("#ugle").classList.add("falling");

    document.querySelector("#kanin").classList.add("falling");

    document.querySelector("#pindsvin").classList.add("falling");


}


document.querySelector("#start").addEventListener("click", startGame);

document.querySelector("#game_background").addEventListener("click", startGame);


document.querySelector("#egern_aabne_ojne").classList.add("fade_out");

document.querySelector("#egern_lukkede_ojne").classList.add("fade_out");



function skraldForsvind() {
    console.log("skraldForsvinder");


    document.querySelector("#cigaretpakke").classList.add("dissappear");



}

document.querySelector("#cigaretpakke").addEventListener("click", skraldForsvind);

function figurShake() {
    console.log("figurShake");

    document.querySelector("#kanin").classList.add("shake");


}

document.querySelector("#kanin").addEventListener("click", figurShake);
