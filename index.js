
//setting up audio variables
let cough1 = new Audio("sounds/cough1.mp3");
let cough2 = new Audio("sounds/cough2.mp3");

let coughElements = document.querySelectorAll(".cough");

//Detecting button press for all buttons

for (let i = 0; i < coughElements.length; i++) {
    coughElements[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    })
}

//detect key press
document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
})

//function for playing sound
function makeSound(key) {

    switch (key) {
        case "w":
            let cough1 = new Audio("sounds/cough4-P-80.mp3");
            cough1.play();
            break;
        case "a":
            let cough2 = new Audio("sounds/cough4-P-60.mp3");
            cough2.play();
            break;
        case "s":
            let cough3 = new Audio("sounds/cough4-P-40.mp3");
            cough3.play();
            break;
        case "d":
            let cough4 = new Audio("sounds/cough4-P-20.mp3");
            cough4.play();
            break;
        case "j":
            let clearThroat2 = new Audio("sounds/cough4.mp3");
            clearThroat2.play();
            break;
        case "k":
            let clearThroat1 = new Audio("sounds/cough4-P+20.mp3");
            clearThroat1.play();
            break;
        case "l":
            let sneeze1 = new Audio("sounds/cough4-P+40.mp3");
            sneeze1.play();
            break;
        default:
    }
}

//funtion to trigger button animation
function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
