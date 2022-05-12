const d = document;

export function cargar() {
    d.addEventListener('click', e => {
        if (e.target.matches('[data-skill]')) {
            const $skill = e.target,
                $progressBar = $skill.querySelector('.progress-bar'),
                $counter = $skill.querySelector('.counter'),
                $progress = $skill.querySelector('.progress'),
                $aviso = $skill.querySelector('.skill-aviso'),
                $list = $skill.querySelector('.skill-list');
            
            $aviso.classList.add('none');
            $progressBar.classList.remove('none');
            $progressBar.classList.add('visible');
            $progress.classList.add('cargando');

            const $delta = parseInt(getComputedStyle($progress).animationDuration, 10) * 10;
            
            let progress = 0,
                reloj;
            
            reloj = setInterval(()=> {
                progress++;
                $counter.textContent = `${progress}%`;
                if (progress >= 100){
                    clearInterval(reloj);
                    $progress.classList.remove('cargando');
                    $skill.classList.add('skill-loaded');
                    $progressBar.classList.add('none');
                    $progressBar.classList.remove('visible');
                    $list.classList.remove('none');
                    $skill.removeAttribute('data-skill');
                };
            }, $delta)
        }
    })
}