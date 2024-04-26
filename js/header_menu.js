const mobil_menu_btn = document.querySelector('.mobil_menu_btn');
const mobil_menu_content = document.querySelector('.mobil_menu_content');
const header_content = document.querySelector('.header_content');
// Открытие и закрыти меню______________________________
let mobil_menu_open = false;

mobil_menu_btn.addEventListener('click', () => {
    if (mobil_menu_open) {
        close_mobil_menu()
    } else {
        open_mobil_menu()
    }
})
function open_mobil_menu() {
    mobil_menu_open = !mobil_menu_open
    mobil_menu_btn.classList.add('open')
    mobil_menu_content.classList.add('open')
}
function close_mobil_menu() {
    mobil_menu_open = !mobil_menu_open
    mobil_menu_btn.classList.remove('open')
    mobil_menu_content.classList.remove('open')
}
//------------------------------------------------------
// Добавление пунктов меню______________________________
(function createNavigation() {
    const header_nav_mobil = document.createElement('nav');
    header_menu_item.forEach(elem => {
        let menu_item = document.createElement('a')
        menu_item.href = elem.href;
        menu_item.textContent = elem.name;
        menu_item.addEventListener('click', (event)=> {
            close_mobil_menu();
            scrollSmooth(event, elem.name)
    })
        header_nav_mobil.appendChild(menu_item)
        header_nav_mobil.className = 'mobil_menu'
    })
    mobil_menu_content.appendChild(header_nav_mobil);


    const header_nav_desktop = document.createElement('nav');

    header_menu_item.forEach(elem => {
        let menu_item = document.createElement('a')
        menu_item.href = elem.href;
        menu_item.textContent = elem.name;
        menu_item.addEventListener('click', (event)=> scrollSmooth(event, elem.name))
        header_nav_desktop.appendChild(menu_item)
        header_nav_desktop.className = 'desctop_menu'
    })
    header_content.appendChild(header_nav_desktop)
}());

//--------------------------------------------------
// Добавление тени хедеру при скролле_______________
const header = document.querySelector('header')
window.addEventListener('scroll', () => {
    window.pageYOffset
        ? header.classList.add('shadow')
        : header.classList.remove('shadow');
        // console.dir(window)
})
//--------------------------------------------------
// Плавная прокрутка_______________________________
function scrollSmooth(e, name) {
    // console.log(e,name)
    e.preventDefault()
    const elem = document.querySelector(`#${name}`)
    elem.scrollIntoView({
        block:'start',
        behavior:'smooth'
    })
}