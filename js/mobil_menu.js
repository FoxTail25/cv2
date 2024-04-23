const mobil_menu_btn = document.querySelector('.mobil_menu');
let mobil_menu_open = false;

mobil_menu_btn.addEventListener('click', ()=>{
    if(mobil_menu_open) {
        mobil_menu_open = !mobil_menu_open
        console.log('mobil_menu: open')
        mobil_menu_btn.classList.add('open')
        console.dir(mobil_menu_btn.classList)
    } else {
        mobil_menu_open = !mobil_menu_open
        console.log('mobil_menu: close')
        mobil_menu_btn.classList.remove('open')
        console.log(mobil_menu_btn)
    }
})