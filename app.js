// Get a reference to the button element
    const myButton = document.getElementById("my-button");
    const myButton2 = document.getElementById("my-button2");
// Add an event listener to the button
    myButton.addEventListener("click", sound1)
    myButton2.addEventListener("click", sound2)
// Function sound1 creates nature sound
    function sound1(){
        const sound = new Howl({
            src: ['relaxing.mp3'] , 
            html5: true
          });
          sound.play();
          console.log("Howl");
    }
// Function sound2 creates woosh sound
    function sound2(){
        const sound = new Howl({
            src: ['whoosh-6316.mp3'] , 
            html5: true
        });
        sound.play();
        console.log("Howl");
    }


