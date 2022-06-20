const d = document;

let scrollSpy;

function markSection(entries) {
    const markSpy = (entryToMark, mark) => {
        if (mark) {
            d.querySelector(`a.menu-link[href="#${entryToMark.target.id}"]`).classList.add('spy');
        } else {
            d.querySelector(`a.menu-link[href="#${entryToMark.target.id}"]`).classList.remove('spy');
        }
    }
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {
            console.log(entrie);
            markSpy(entrie, true);
        } else {
            markSpy(entrie, false);
        }
    })
}

export function observerMenu() {
    const $sections = d.querySelectorAll('[data-menu]');
    const options = {
        threshold: 0,
        rootMargin: `-100.125px 0px -${0.9*window.innerHeight - 100.125}px 0px`
    }

    scrollSpy = new IntersectionObserver(markSection, options);
    
    $sections.forEach(section => {
        scrollSpy.observe(section);
    })
}

export function deleteObserver() {
    scrollSpy.disconnect();
    d.querySelectorAll('a.menu-link[href]').forEach(el => el.classList.remove('spy'));
}