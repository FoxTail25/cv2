const mobil_menu_btn = document.querySelector('.mobil_menu_btn');
const mobil_menu_content = document.querySelector('.mobil_menu_content');
// Открытие и закрыти меню______________________________
let mobil_menu_open = false;

mobil_menu_btn.addEventListener('click', () => {
    if (mobil_menu_open) {
        mobil_menu_open = !mobil_menu_open
        mobil_menu_btn.classList.remove('open')
        mobil_menu_content.classList.remove('open')
    } else {
        mobil_menu_open = !mobil_menu_open
        mobil_menu_btn.classList.add('open')
        mobil_menu_content.classList.add('open')
    }
})
//------------------------------------------------------
// Добавление пунктов меню______________________________
console.log(header_menu_item);
(function createNavigation() {
    const header_nav = document.createElement('nav');
    header_menu_item.forEach(elem => {
        let menu_item = document.createElement('a')
        menu_item.href = elem.href
        menu_item.textContent = elem.name
        header_nav.appendChild(menu_item)
    })
    mobil_menu_content.appendChild(header_nav)
}())