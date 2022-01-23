let buttons = document.querySelectorAll('.fake-checkbox');

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.toggle("active");
}));