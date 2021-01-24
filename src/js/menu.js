import parcedItems from '../templates/menu.hbs';
import menu from '../menu.json';

const finalItems = parcedItems(menu);
const menuCont = document.querySelector('.js-menu');
menuCont.insertAdjacentHTML('beforeend', finalItems);
