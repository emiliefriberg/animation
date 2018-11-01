window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises)");
    //nulstil alting
    showStart();
}


function showStart() {
    console.log("showstart");

    //vis startskærm
    document.querySelector("#start").classList.add("show");


    //start animation på start-knap
    document.querySelector("#start_knap").classList.add("pulse");


    //henter hideStart når der bliver klikket på knappen
    document.querySelector("#start_knap").addEventListener("click", hideStart);

}


function hideStart() {
    console.log("hideStart");

    //stop animation på start-knap
    document.querySelector("#start_knap").classList.add("hide");

    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    //henter startGame når animationen fade_out er færdig
    document.querySelector("#start").addEventListener("animationend", startGame);

}




function startGame() {
    console.log("startGame");

    //skjul startskærm

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");


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

    document.querySelector("#plastik").addEventListener("click", clickSkrald);
    document.querySelector("#daase_orange").addEventListener("click", clickSkrald);
}

function clickSkrald() {
    console.log("clickSkrald");
    //Pause falde-animation
    //Start forsvind-animation på skraldet
}

function skraldForsvinder() {
    console.log("skraldForsvinder");

    document.querySelector("#cigaretpakke").classList.add("dissappear");

    document.querySelector("#cigaretpakke").addEventListener("click", skraldForsvinder);
}









//document.querySelector("#egern_aabne_ojne").classList.add("fade_out");
//
//document.querySelector("#egern_lukkede_ojne").classList.add("fade_out");
