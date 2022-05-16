    const d = document;

export function enviarInformacion(form) {
    const $form = d.getElementById(form);

    async function submit(f) {
        const $legend = f.querySelector('legend'),
            $inputs = f.querySelectorAll('[data-validar]'),
            $submit = f.querySelector('[data-submit]'),
            $response = f.querySelector('.contact-form-response'),
            $loader = f.querySelector('.contact-form-loader'),
            data = new FormData(f),
            options = {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            };
        
        $submit.classList.add('none');
        $loader.classList.remove('none');

        try {
            let res = await fetch('https://formspree.io/f/xdobywvn', options),
                dataR = await res.json();
            
            $legend.classList.add('none');
            $inputs.forEach(el => el.classList.add('none'));
            $loader.classList.add('none');
            
            if (res.ok) {
                $response.querySelector('p').textContent = '✅ Tus datos fueron recibidos con éxito. ¡En breve me comunicaré contigo!'
                $response.querySelector('p').classList.add('contact-form-response--correct');
                $response.classList.remove('none');
            } else {
                throw dataR
            }
        } catch (error) {
            if (Object.hasOwn(error, 'errors')) {
                $response.querySelector('p').textContent = `❌ Algo salió mal - ${error['errors'].map(err => err['message']).join(', ')}`;
            } else {
                $response.querySelector('p').textContent = `❌ Algo salió mal. Error # ${error.status}:${error.statusText || ''}`
            }

            $response.querySelector('p').classList.add('contact-form-response--error');
            $response.classList.remove('none');

            $legend.classList.remove('none');
            $inputs.forEach(el => el.classList.remove('none'));
            f.reset();
        }
    }

    d.addEventListener('submit', e => {
        if (e.target === $form) {
            e.preventDefault();

            const questionSecuity = confirm('Revisa tus datos una última vez antes de enviarlos. Presiona "Aceptar" si todo es correcto ó "Cancelar" para corregir.')

            if (questionSecuity) {
                submit(e.target);
            }
        }
    })
}