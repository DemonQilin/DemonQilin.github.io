const d = document;

export function observerMenu() {
    const $sections = d.querySelectorAll('[data-menu]');
    
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    let scrollSpy = new IntersectionObserver(markSection, options);

    $sections.forEach(section => {
        scrollSpy.observe(section);
    })

    function markSection(entries) {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                d.querySelector(`a.menu-link[href="#${entrie.target.id}"]`).classList.add('spy');
            } else {
                d.querySelector(`a.menu-link[href="#${entrie.target.id}"]`).classList.remove('spy');
            }
        })
    }
}