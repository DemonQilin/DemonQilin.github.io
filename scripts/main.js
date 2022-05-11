import { hamburguerMenu } from "./modules/hamburguer-menu.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {
    hamburguerMenu('.btn-menu', '.menu');
});