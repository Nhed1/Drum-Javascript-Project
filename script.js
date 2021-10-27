const keys = document.querySelectorAll('.key')
const audios = document.querySelectorAll('audio')

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    // remove the classList if transform is not working
  }

window.addEventListener('keydown', function(event){
    let keyCode = event.keyCode // get the keycode of the key pressed

    // add audio to the letter when pressed
    audios.forEach(audio => {
        let audioKey = audio.getAttribute('data-key')
        if (keyCode == audioKey) { 
            audio.currentTime = 0; // to play more quickly the audio
            audio.play();
        }
        // audio data key
    })


    // add styles to the letter when pressed 
    keys.forEach(event => {
        event.addEventListener('transitionend', removeTransition)
        let letterDataKey = event.getAttribute('data-key')
        
        if (keyCode == letterDataKey) { // check the key that I press
            event.classList.add('playing')       
            // add the class 
        }
    })
})









