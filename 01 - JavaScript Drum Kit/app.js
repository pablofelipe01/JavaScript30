function playSound(e) {
    
    const audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`)
    
    const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`)
    
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    
    
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return 
    this.classList.remove('playing')
    
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition ))
window.addEventListener('keydown', playSound)




































// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);