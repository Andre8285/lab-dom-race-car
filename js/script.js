window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game

  startButton.addEventListener("click", function () {
    game = new Game()
    game.start();
  });

  function startGame() {
    console.log("start game");
  }



  //function that habdles  key events

function handleKeydown (event) {

  const key = event.key;
  const possibleKeys = [
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
  ]

  if(possibleKeys.includes(key)){

    event.preventDefault()

    if (game)
    switch(key){

         case "ArrowLeft":
         game.player.directionX = -1;
         break;

         case "ArrowUp":
         game.player.directionY = -1;
         break;

         case "ArrowRight":
         game.player.directionX = 1;
         break;

         case "ArrowDown":
         game.player.directionY = 1;
         break;

    }


  }
}
 
window.addEventListener("keydown", handleKeydown)


//handle key up

function handleKeyup(event) {

  const key = event.key;
  const possibleKeys = [
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
  ]

  if(possibleKeys.includes(key)){

    event.preventDefault()

    if (game)
    switch(key){

         case "ArrowLeft":
         game.player.directionX = 0;
         break;

         case "ArrowUp":
         game.player.directionY = 0;
         break;

         case "ArrowRight":
         game.player.directionX = 0;
         break;

         case "ArrowDown":
         game.player.directionY = 0;
         break;

    }


  }
}
 
window.addEventListener("keydown", handleKeydown)
window.addEventListener("keyup", handleKeydown)



};




restartButton.addEventListener("click", function (){
  restartGame ();
})

function restartButton (){
  location.reload();
}