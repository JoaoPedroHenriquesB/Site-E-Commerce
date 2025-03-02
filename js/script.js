document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado');

    const buttons = document.querySelectorAll('.add-to-cart-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('added');

            setTimeout(() => {
                button.classList.remove('added');
            }, 1000);
        });
    });
});