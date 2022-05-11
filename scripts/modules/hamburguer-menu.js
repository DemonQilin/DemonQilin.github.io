const d = document;

export function hamburguerMenu(btn,nav) {
    const $btn = d.querySelector(btn),
        $menu = d.querySelector(nav);

    d.addEventListener('click', e => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            $btn.classList.toggle('is-active');
            $menu.classList.toggle('menu-active');
        }
    })
}