const button = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');

const toggleMenu = () => {
    if (menu.dataset.menu === "is-closed") {
        menu.dataset.menu = "is-opened";
        button.dataset.burger = "is-opened";
    } else {
        menu.dataset.menu = "is-closed";
        button.dataset.burger = "is-closed";
    }
}

const initBurger = () => {
    button.addEventListener('click', toggleMenu)
}

export default initBurger