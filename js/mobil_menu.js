const mobil_menu_btn = document.querySelector('.mobil_menu_btn');
const mobil_menu_content = document.querySelector('.mobil_menu_content');
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
    const header_nav = document.createElement('nav');
    header_menu_item.forEach(elem => {
        let menu_item = document.createElement('a')
        menu_item.href = elem.href;
        menu_item.textContent = elem.name;
        menu_item.addEventListener('click', close_mobil_menu)
        header_nav.appendChild(menu_item)
        header_nav.className = 'mobil_menu'
    })
    mobil_menu_content.appendChild(header_nav)
}())