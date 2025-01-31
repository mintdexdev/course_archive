//play sound
function playSound(button_drums) {
    switch (button_drums) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
    }
}
//animation
function keyPressAnimation(current_key) {
    document.querySelector("." + current_key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + current_key).classList.remove("pressed");
    }, 80);
}

var drum_buttons = document.querySelectorAll("button.drum"),
    num_of_drum_buttons = drum_buttons.length;

//clicked
for (var i = 0; i < num_of_drum_buttons; i++) {
    drum_buttons[i].addEventListener("click", function () {
        var button_drums = this.innerHTML;
        keyPressAnimation(button_drums);
        playSound(button_drums);
    });
}

//keypress
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    keyPressAnimation(event.key);
});
