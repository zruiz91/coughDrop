
//setting up audio variables
// let cough1 = new Audio("sounds/cough1.mp3");

let coughElements = document.querySelectorAll(".cough");

//Detecting button press for all buttons

for (let i = 0; i < coughElements.length; i++) {
    coughElements[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

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
            let cough1 = new Audio("sounds/cough1.mp3");
            cough1.play();
            break;
        case "a":
            let cough2 = new Audio("sounds/cough2.mp3");
            cough2.play();
            break;
        // case "s":
        //     let tom3 = new Audio("sounds/tom-3.mp3");
        //     tom3.play();
        //     break;
        // case "d":
        //     let tom4 = new Audio("sounds/tom-4.mp3");
        //     tom4.play();
        //     break;
        // case "j":
        //     let snare = new Audio("sounds/snare.mp3");
        //     snare.play();
        //     break;
        // case "k":
        //     let kick = new Audio("sounds/kick-bass.mp3");
        //     kick.play();
        //     break;
        // case "l":
        //     let crash = new Audio("sounds/crash.mp3");
        //     crash.play();
        //     break;
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
