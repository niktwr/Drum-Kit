var totaldrums = document.querySelectorAll(".drum").length;


// Detecting clicks on drums

for(var i=0 ; i< totaldrums ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

   makeSound(this.innerHTML);  

   buttonAnimation(this.innerHTML);

});

}
 // Detecting Keyboard Press

document.addEventListener("keypress" , function(event){
   makeSound(event.key);

   buttonAnimation(event.key);
})


function makeSound(key){
   switch (key) {
      case "w":
         var audio = new Audio('.\\sounds\\tom-1.mp3');
         audio.play(); 
      break;

      case "a":
         var audio = new Audio('.\\sounds\\tom-2.mp3');
         audio.play(); 
      break;
   
      case "s":
         var audio = new Audio('.\\sounds\\tom-3.mp3');
         audio.play(); 
      break;

      case "d":
         var audio = new Audio('.\\sounds\\tom-4.mp3');
         audio.play(); 
      break;

      case "j":
         var audio = new Audio('.\\sounds\\crash.mp3');
         audio.play(); 
      break;

      case "k":
         var audio = new Audio('.\\sounds\\kick-bass.mp3');
         audio.play(); 
      break;

      case "l":
         var audio = new Audio('.\\sounds\\snare.mp3');
         audio.play(); 
      break;

      default:
         console.log(this.innerHTML);
      break;
   }
}

function buttonAnimation(currentKey){
     var activeButton = document.querySelector("."+ currentKey);

     activeButton.classList.add("pressed");

     setTimeout(function(){
      activeButton.classList.remove("pressed");                                     // 1 sec = 1000 milli sec
     },200);


}