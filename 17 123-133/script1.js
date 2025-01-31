function randomDiceVal() {
    return Math.floor(Math.random() * 6) + 1;
}
// function DiceImage(random_dice_val) {
//     switch (random_dice_val) {
//         case 1:
//             return "images/dice1.png";
//         case 2:
//             return "images/dice2.png";
//         case 3:
//             return "images/dice3.png";
//         case 4:
//             return "images/dice4.png";
//         case 5:
//             return "images/dice5.png";
//         case 6:
//             return "images/dice6.png";
//     }
// }
// var p1_dice_val = randomDiceVal();
// var p2_dice_val = randomDiceVal();

// if (p1_dice_val > p2_dice_val) {
//     document.querySelector("h1").textContent = "Player 1 Wins!";
// } else if (p1_dice_val < p2_dice_val) {
//     document.querySelector("h1").textContent = "Player 2 Wins!";
// } else if (p1_dice_val === p2_dice_val) {
//     document.querySelector("h1").textContent = "Draw!";
// }

// document.querySelector(".img1").setAttribute("src", DiceImage(p1_dice_val));
// document.querySelector(".img2").setAttribute("src", DiceImage(p2_dice_val));

var p1_dice_val = randomDiceVal(),
    p2_dice_val = randomDiceVal();

var text_h1 = document.querySelector("h1");
if (p1_dice_val > p2_dice_val) {
    text_h1.textContent = "Player 1 Wins!";
} else if (p1_dice_val < p2_dice_val) {
    text_h1.textContent = "Player 2 Wins!";
} else if (p1_dice_val === p2_dice_val) {
    text_h1.textContent = "Draw!";
}

// var img_class = [".img1", ".img2"],
//     image_element = [document.querySelector(img_class[0]), document.querySelector(img_class[1])];
var image_element = [document.querySelector(".img1"), document.querySelector(".img2")];
image_element[0].setAttribute("src", "images/dice" + p1_dice_val + ".png");
image_element[1].setAttribute("src", "images/dice" + p2_dice_val + ".png");
