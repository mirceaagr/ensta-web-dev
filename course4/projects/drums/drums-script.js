
document.addEventListener("keydown",hit);// add event listener for every we hit

var drumKeys = document.getElementsByClassName("key"); // we select by class all the keys
var soundList = document.getElementsByTagName("audio");     // add the key event to document, and set up the lists with the elements

//console.log(tabList); // uncomment to see the output in the console
//console.log(soundList);

function hit(event){
  //console.log("#### Tab Codes ####")
  for(var i = 0; i < drumKeys.length; i++)
     {
         var tabCode = drumKeys[i].getAttribute("data-key");
         tabCode = Number(tabCode);
         console.log(tabCode)

       if(tabCode === event.keyCode) 
        { 
          drumKeys[i].classList.add("playing"); // show the class for playing
          // we remove the transition from the buttons
          drumKeys[i].addEventListener("transitionend", remove);   // remove the effect from the specific element
        }   
        
     // save the keycode and check into the divs list to see if data-key is equal to the keycode
      // if equal, set the effect on that element   
    }
   // console.log("#### Sound Codes ####")
  for(var j = 0; j < soundList.length; j++ )
    {
        var soundCode = soundList[j].getAttribute("data-sound");
        soundCode = Number(soundCode);
        //console.log(soundCode);
        if(soundCode === event.keyCode)
           { 
               soundList[j].currentTime = 0;
               soundList[j].play();   
           }    
    }
}   
   // find the sound that matches the keyCode of the keydown event
    // reset the playtime (currentTime = 0), and play again

function remove(event){
    this.classList.remove("playing"); // removes Emmitter ..
}