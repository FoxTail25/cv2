const audio = document.getElementsByTagName('audio')[0]
const radio_btn = document.getElementById('radio_btn')
const radio_volume = document.getElementById('radio_volume')
let pause = true
console.log(radio_btn.children[0].src)
// console.dir(audio)

audio.volume = radio_volume.value/10;

radio_btn.addEventListener('click', ()=>{
    if(pause) {
        audio.play();
        pause = !pause;
        // radio_btn.textContent = 'Выключить радио'
        radio_btn.children[0].style.opacity = 0
        radio_btn.children[1].style.opacity = 1
    } else {
        audio.pause();
        pause = !pause;
        radio_btn.children[0].style.opacity = 1
        radio_btn.children[1].style.opacity = 0
        // radio_btn.textContent = 'Включить радио'
    }
})

radio_volume.addEventListener('input', ()=>{
    // console.log(radio_volume.value);
    audio.volume = radio_volume.value/10;
})