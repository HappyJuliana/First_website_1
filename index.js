document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('appointment_form');

    const inputName = document.getElementById('inputName');
    const resultName = document.getElementById('resultName');

    const inputEmail = document.getElementById('inputEmail');
    const resultEmail = document.getElementById('resultEmail');

    const inputMessage = document.getElementById('inputMessage');
    const resultMessage = document.getElementById('resultMessage');

    form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
        event.preventDefault();

        const name = inputName.value;
        const email = inputEmail.value;
        const message = inputMessage.value;

        if (name.trim() === '') {
            resultName.textContent = 'Please enter your name';
            resultName.style.color = 'red';
        } else if (name.length < 3) {
            resultName.textContent = 'Your name should consist of 2 or more characters';
            resultName.style.color = 'red';
        } else {
            resultName.textContent = `Hello, ${name}!`
            resultName.style.color = 'green';
        };

        if (email === '') {
            resultEmail.textContent = 'Please enter your email';
            resultEmail.style.color = 'red';
        } else {
            resultEmail.textContent = `Your email ${email} was registered`;
            resultEmail.style.color = 'green';
        };

        if (message.trim() === '') {
            resultMessage.textContent = 'Please enter your message';
            resultMessage.style.color = 'red';
        } else {
            const words = message.split(' ');
            if (words.length < 3) {
                resultMessage.textContent = 'Your message should contain at least 3 words';
                resultMessage.style.color = 'red';
            } else {
                resultMessage.textContent = 'We received your message';
                resultMessage.style.color = 'green';
            }
        };
    }
});