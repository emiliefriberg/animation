window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;

let point = 0;
let life = 3;


function sidenVises() {
    console.log("sidenVises)");
    showStart();


    document.querySelector("#start").addEventListener("click", showStart);
    document.querySelector("#settings_icon").addEventListener("click", showSettings);

    document.querySelector("#settings_tilbage").addEventListener("click", hideSettings);

    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);

    document.querySelector("#setting_music").addEventListener("click", toggleMusic);


    document.querySelector("#gameover").classList.remove("show");

    document.querySelector("#gameover_prov_igen").classList.remove("show");

    document.querySelector("#gameover_slut_spillet").classList.remove("show");

}





function showStart() {
    console.log("showstart");


    document.querySelector("#musik").play();



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

    //hvis gameover og klikker prøv igen - fjern gameover skærm og ikoner
    document.querySelector("#gameover").classList.remove("show");

    document.querySelector("#gameover_prov_igen").classList.remove("show");
    document.querySelector("#gameover_slut_spillet").classList.remove("show");





    //vis spilskærm
    document.querySelector("#game_background").classList.add("show");



    //settings
    document.querySelector("#settings_icon").addEventListener("click", showSettings);

    document.querySelector("#settings_tilbage").addEventListener("click", hideSettings);





    //start falling
    document.querySelector("#cigaretpakke").classList.add("falling");

    document.querySelector("#daase_graa").classList.add("falling1");

    document.querySelector("#daase_orange").classList.add("falling");

    document.querySelector("#plastik").classList.add("falling");

    document.querySelector("#plastikflaske").classList.add("falling");

    document.querySelector("#plastikpose").classList.add("falling1");

    document.querySelector("#solvpapir").classList.add("falling");

    document.querySelector("#ugle").classList.add("falling1");

    document.querySelector("#kanin").classList.add("falling");

    document.querySelector("#pindsvin").classList.add("falling1");








    //klik på skrald

    document.querySelector("#cigaretpakke").addEventListener("click", clickSkrald)
    document.querySelector("#daase_graa").addEventListener("click", clickSkrald)
    document.querySelector("#daase_orange").addEventListener("click", clickSkrald);

    document.querySelector("#plastik").addEventListener("click", clickSkrald);
    document.querySelector("#plastikflaske").addEventListener("click", clickSkrald);
    document.querySelector("#plastikpose").addEventListener("click", clickSkrald);

    document.querySelector("#solvpapir").addEventListener("click", clickSkrald);









    //klik på dyr
    document.querySelector("#kanin").addEventListener("click", clickDyr);
    document.querySelector("#pindsvin").addEventListener("click", clickDyr);

    document.querySelector("#ugle").addEventListener("click", clickDyr);

}






//Når der klikkes på skrald



function clickSkrald() {
    console.log("clickSkrald");

    document.querySelector("#papir").play();
    document.querySelector("#papir").currentTime = 0;

    document.querySelector("#yes").currentTime = 0;
    // TODO: giv point

    point++;
    console.log(point);

    document.querySelector(".antal_point").textContent = point;


    console.log(this);

    let myNumber = Math.floor((Math.random() * 5) + 1);
    console.log("tilfældigt tal: " + myNumber);


    this.classList = "skrald skrald_pos" + myNumber;

}







//Når der klikkes på dyr


function clickDyr() {
    console.log("clickDyr");

    document.querySelector("#nej").play();
    document.querySelector("#nej").currentTime = 0;

    // TODO: mist et liv

    life--;
    console.log(life);
    document.querySelector(".antal_liv").textContent = life;

    console.log(this);

    let myNumber = Math.floor((Math.random() * 5) + 1);
    console.log("tilfældigt tal: " + myNumber);


    this.classList = "dyr dyr_pos" + myNumber;


    gameStatus();
}







//Skrald forsvinder

function skraldGone() {

    console.log("skraldGone");

    //    document.querySelector("#plastik").classList.add("paused");
    document.querySelector("#cigaretpakke").classList.add("dissappear");

    document.querySelector("#daase_graa").classList.add("dissappear");

    document.querySelector("#daase_orange").classList.add("dissappear");

    document.querySelector("#plastik").classList.add("dissappear");

    document.querySelector("#plastikflaske").classList.add("dissappear");

    document.querySelector("#plastikpose").classList.add("dissappear");

    document.querySelector("#solvpapir").classList.add("dissappear");








    //Der klikkes på skraldet
    document.querySelector("#cigaretpakke").addEventListener("click", skraldGone);

    document.querySelector("#daase_graa").addEventListener("click", skraldGone);

    document.querySelector("#daase_orange").addEventListener("click", skraldGone);

    document.querySelector("#plastik").addEventListener("click", skraldGone);

    document.querySelector("#plastikflaske").addEventListener("click", skraldGone);

    document.querySelector("#plastikpose").addEventListener("click", skraldGone);

    document.querySelector("#solvpapir").addEventListener("click", skraldGone);

}






//Dyr forsvinder

function dyrGone() {
    console.log("dyrGone");

    //    document.querySelector("#kanin").classList.add("paused");
    document.querySelector("#kanin").classList.add("dissappear");

    document.querySelector("#pindsvin").classList.add("dissappear");

    document.querySelector("#ugle").classList.add("dissappear");

    document.querySelector("#kanin").addEventListener("click", dyrGone);

    document.querySelector("#pindsvin").addEventListener("click", dyrGone);

    document.querySelector("#ugle").addEventListener("click", dyrGone);


}

function gameStatus() {

    if (life <= 0) {
        gameOver();
    }

    //    if (point <= 15) {
    //        gameOver();
    //    } efter 40 sekunder

    if (point >= 15) {
        levelCompleted();
    }

}

function gameOver() {
    console.log("gameOver");

    document.querySelector("#gameover").classList.add("show");
    document.querySelector("#gameover_prov_igen").classList.add("show");
    document.querySelector("#gameover_slut_spillet").classList.add("show");

    document.querySelector("#gameover_prov_igen").addEventListener("click", startGame);

    document.querySelector("#gameover_slut_spillet").addEventListener("click", sidenVises);
}


function levelCompleted() {
    console.log("levelCompleted");

    document.querySelector("#levelcomplete").classList.add("show");
    document.querySelector("#levelcomplete_prov_igen").classList.add("show");
    document.querySelector("#levelcomplete_slut_spillet").classList.add("show");

}


function showSettings() {
    console.log("vis settings")

    document.querySelector("#settings").classList.toggle("hide");

    document.querySelector("#settings_tilbage").classList.add("show");

}


function toggleSounds() {
    console.log("togglesounds");

    if (showSettingsEffektSound == false) {
        showSettingsEffektSound = true;
        document.querySelector("#effekter_sprite").classList.add("off_on");
        document.querySelector("#effekter_sprite").classList.remove("on_off");
        document.querySelector("#effekter_sprite").addEventListener('animationend', soundsOff);

    } else {

        showSettingsEffektSound = false;
        document.querySelector("#effekter_sprite").classList.add("on_off");
        document.querySelector("#effekter_sprite").classList.remove("off_on");
        document.querySelector("#effekter_sprite").addEventListener('animationend', soundsOn);
    }
}



function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);

    document.querySelector("#effekter_sprite").classList.remove("on_off")
    document.querySelector("#effekter_sprite").classList.add("off")

    //    her slukkes for effekter

    document.querySelector("#papir").muted = true;
    document.querySelector("#ov").muted = true;
    document.querySelector("#nej").muted = true;


}



function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#effekter_sprite").classList.remove("off_on")
    document.querySelector("#effekter_sprite").classList.add("on")



    //    her tændes for effekter

    document.querySelector("#nej").muted = false;
    document.querySelector("#papir").muted = false;
    document.querySelector("#ov").muted = false;
}



function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    //    showSettingsMusic = !showSettingsMusic;


    if (showSettingsMusic == false) {
        showSettingsMusic = true;
        document.querySelector("#musik_sprite").classList.add("off_on");
        document.querySelector("#musik_sprite").classList.remove("on_off");
        document.querySelector("#musik_sprite").addEventListener('animationend', musicOff);

    } else {

        showSettingsMusic = false;
        document.querySelector("#musik_sprite").classList.add("on_off");
        document.querySelector("#musik_sprite").classList.remove("off_on");
        document.querySelector("#musik_sprite").addEventListener('animationend', musicOn);
    }

}


function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    document.querySelector("#musik_sprite").classList.remove("on_off")
    document.querySelector("#musik_sprite").classList.add("off")

    //    her slukkes for efx
    document.querySelector("#musik").muted = true;
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);

    document.querySelector("#musik_sprite").classList.remove("off_on")
    document.querySelector("#musik_sprite").classList.add("on")

    //    her tændes for efx
    document.querySelector("#musik").muted = false;
}





function hideSettings() {
    console.log("fjern settings")

    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#settings_tilbage").classList.remove("show");


}





//document.querySelector("#egern_aabne_ojne").classList.add("fade_out");
//
//document.querySelector("#egern_lukkede_ojne").classList.add("fade_out");
