import filter from "./filter.js";

const initDropdown = () => {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    
    document.querySelectorAll('.dropdown').forEach((dropdownWrapper) => {
        const button = dropdownWrapper.querySelector('.dropdown__button');
        const list = dropdownWrapper.querySelector('.dropdown__list');
        const items = list.querySelectorAll('.dropdown__list-item');
        const input = dropdownWrapper.querySelector('.dropdown__input-hidden');
    
        button.addEventListener('click', () => {
            list.classList.toggle('dropdown__list--visible');
        });
    
        items.forEach((listItem) => {
            listItem.addEventListener('click', (evt) => {
                // evt.stopPropagation;
                button.innerText = evt.target.innerText;
                button.focus();
                input.value = evt.target.dataset.filter;
                filter(evt.target.dataset.filter);
                list.classList.remove('dropdown__list--visible');
            })
        });
    
        document.addEventListener('click', (evt) => {
            if (evt.target !== button) {
                list.classList.remove('dropdown__list--visible');
            }
        });
    
        document.addEventListener('keydown', (evt) => {
            if (evt.key === "Escape" || evt.key === "Tab") {
                list.classList.remove('dropdown__list--visible');
            }
        })
    })
}

export default initDropdown