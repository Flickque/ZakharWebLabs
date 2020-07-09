// Дано: функция
  const mixin = function(){ 
   return this * this; 
  };
// Выполнить: вызвать функцию так, чтобы при вызове от значения 5 выдавался квадрат числа 5, равный 25

// здесь ваш ответ 
Out.log(mixin.call(5));
Out.log(mixin.apply(5));