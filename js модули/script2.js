// main.js
import { users } from './script.js';

const username = prompt('Введите ваше имя:', 'user');

if (!users[username]) {
    alert('Такого пользователя не существует');
} else {
    const password = prompt('Введите пароль:', '');
    
    if (password && password === users[username]) {
        alert('Вы вошли');
    } else {
        alert('Неправильный пароль');
    }
}