// Дано: функция, экспортированная по адресу 
// kodaktor.ru/j/func_003_export

// Выполнить: 
// импортировать её сюда
// с помощью метода bind привязать к её аргументу значение 5
// и вызвать для получения результата 25

// здесь ваш ответ 
import mixin from '/j/func_003_export'; 
let result = mixin.bind();
Out.log(result(5));