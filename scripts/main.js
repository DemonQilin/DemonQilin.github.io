// IMPORTACIONES
import { hamburguerMenu } from "./modules/hamburguer-menu.js";
import { cargar } from "./modules/skills-progress.js";
import { slideServices } from "./modules/slide-services.js";
import { mediaResponsiveFunction } from "./modules/set-function-responsive.js";
import { sacudirClick, sacudirMouseOver, sacudirObserver } from "./modules/rotate-animation.js";


// VARIABLES
const d = document;

// FUNCIONES


d.addEventListener('DOMContentLoaded', e => {
    hamburguerMenu('.btn-menu', '.menu', '.menu-link');
    slideServices();
    cargar();
    mediaResponsiveFunction(1024, sacudirMouseOver, sacudirObserver, 768, sacudirClick);
});