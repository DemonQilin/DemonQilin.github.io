import { hamburguerMenu } from "./modules/hamburguer-menu.js";
import { cargar } from "./modules/skills-progress.js";
import { slideServices } from "./modules/slide-services.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburguerMenu('.btn-menu', '.menu', '.menu-link');
    slideServices();
    cargar();
});