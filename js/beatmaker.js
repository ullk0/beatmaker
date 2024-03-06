const buttons = document.querySelectorAll('.ts, .tr')

buttons.forEach((button) => {
    button.classList.add('disabled-sample-button')
    button.addEventListener('click', () => {
        if (!button.classList.contains('disabled-sample-button')) {
            button.classList.add('disabled-sample-button')
        } else {
            button.classList.remove('disabled-sample-button')
        }
    })
})