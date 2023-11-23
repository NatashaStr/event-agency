import initSwiperEvents from "./initSwiper.js";

const initialList = document.querySelectorAll('[data-sex]');
const ulElem = document.querySelector('.events__list');

const filter = (filterValue) => {
    const filteredList = [];
    initialList.forEach((el) => {
        const sex = el.dataset.sex;

        if (filterValue === sex) {
            return filteredList.push(el);
        }
    })
    ulElem.textContent = '';

    filteredList.forEach((el) => {
        ulElem.append(el);
    });
    initSwiperEvents.update();

}

export default filter;