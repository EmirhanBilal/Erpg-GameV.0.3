let name_character;
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