/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
const output = document.createElement('div');  
document.body.appendChild(output);  
button.addEventListener('click', function() {  
    let userInput = prompt('Введите ваше сообщение:');  
    if (userInput) {  
        output.textContent = `Вы ввели: ${userInput}`;  
    }  
});  