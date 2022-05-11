import { hamburguerMenu } from "./modules/hamburguer-menu.js";
import { slideServices } from "./modules/slide-services.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburguerMenu('.btn-menu', '.menu', '.menu-link');
    slideServices();
});