/*
* мутацией объекта называется процесс изменения объекта
*/

const object = {
    name: 'object',
    other: ''
}

const object2 = object;
object2.other = 'small object' // Это мутация

/*
* Чтобы избежать мутации, нужно:
* */
const object3 = Object.assign({}, object);//этот метод в объект первого аргумента запишет аргументы второго объекта? нужно учитывать, что это не глубокое копирование


object3.other = 'this is object3';

//способ 2
const object4 = {...object}; //это тоже не глубокое клонирование
object4.other = 'this is object4';


//чтобы сделать глубокое клонирование, можно конвертировать в json и обратно
object5 = JSON.parse(JSON.stringify(object));
object5.other = 'this is object5';


console.log(object);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);