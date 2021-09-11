const images = [
    "./images/dice-01.svg",
    "./images/dice-02.svg",
    "./images/dice-03.svg",
    "./images/dice-04.svg",
    "./images/dice-05.svg",
    "./images/dice-06.svg"
];
const dice = document.querySelectorAll("img");
const rollButton = document.getElementById("roll");

function roll(){
    console.log("This console is for checking")
    dice.forEach(die => {
        die.classList.add("shake");
    })

    setTimeout( function(){
        dice.forEach(die => {
            die.classList.remove("shake")
        })
    
    let index1 = Math.floor(Math.random() * images.length)
    let index2 = Math.floor(Math.random() * images.length)

    document.querySelector("#die-1").setAttribute("src", images[index1]);
    document.querySelector("#die-2").setAttribute("src", images[index2]);
    document.querySelector("#total").innerHTML = "Your roll is " + ( (index1 +1) + (index2 + 1) );
  } , 1000)
}

rollButton.addEventListener("click" , roll)
roll()