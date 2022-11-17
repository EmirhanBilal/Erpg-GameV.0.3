let name_character;
let specCharacter;
function send_name() {
    name_character = sessionStorage.setItem("name", document.getElementById('character-name').innerHTML);
    sessionStorage.setItem("level", document.getElementById('level').innerHTML);
}

function paste_name() {
    document.getElementById('champion-name').innerHTML = sessionStorage.getItem("name");
    document.getElementById('area-level').innerHTML = sessionStorage.getItem("level");
}

function paste_town_name() {
document.getElementById('character-name').innerHTML = sessionStorage.getItem("nameback");
document.getElementById('player').innerHTML ="Name: " + sessionStorage.getItem("nameback");
}

function character_spec() {
    if ( document.getElementById('spec-name').innerHTML === "WARRIOR") {
        sessionStorage.setItem("specCharacter", "warrior")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    if ( document.getElementById('spec-name').innerHTML === "ROGUE") {
        specCharacter = sessionStorage.setItem("specCharacter", "rogue")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    if ( document.getElementById('spec-name').innerHTML === "MAGE") {
        specCharacter = sessionStorage.setItem("specCharacter", "mage")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
}
function load_for_spec(){
    if (sessionStorage.getItem("specCharacter") === "warrior") {
        document.getElementById('championİmage').src = "Photos/medival-knight-png-5a3a8e26810fe5.8281968015137869185287-removebg-preview (4).png"
        document.getElementById('small-champion-image').src = "Photos/small-img/warrior-small-img.png"
        document.getElementById('flee').href = "warrior-town.html"
    }
    if (sessionStorage.getItem("specCharacter") === "rogue") {
        document.getElementById('championİmage').src = "Photos/266-2663387_rogue-final-ronin-rpg-class.png"
        document.getElementById('small-champion-image').src = "Photos/small-img/small-rogue.png"
        document.getElementById('flee').href = "rogue-town.html"
    }
    if (sessionStorage.getItem("specCharacter") === "mage") {
        document.getElementById('championİmage').src = "Photos/png-transparent-drakensang-online-drakensang-the-dark-eye-mu-online-monster-hunter-freedom-browser-game-mage-game-fictional-character-quest-thumbnail-removebg-preview.png"
        document.getElementById('small-champion-image').src = "Photos/small-img/small-mage.png"
        document.getElementById('flee').href = "mage-town.html"
    }
}