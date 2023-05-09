const object ={
    firstName: 'leha',
    lastName:'Shilnikov'
};

// Добавляем объект
object.secondName = 'Mihailovich';

//изменяем объект
object.firstName = 'Alexey';

//удаляем объект
delete object.firstName;
delete object.lastName;

//добавляем вложенное свойство
object.name ={
    firstName: 'leha',
    lastName:'Shilnikov'
}

//перенесем secondName в name
object.name.secondName = object.secondName;
delete object.secondName;

//добавление через квадратные скобки, они нужны для того, чтобы дать имя переменной
object['popular'] = true;

//даем имя свойста через переменную
const countryPropertyName = 'coutry';
object[countryPropertyName] = 'russia';

console.log(object);

//вот такой способ еще есть
let firstName = 'bla bla bla';
const age = 34;

const firstNamePropertyName = 'firstName';

//полный формат
const personInfo = {
    [firstNamePropertyName]: firstName,
    age: age
}

console.log(personInfo);

//сокращенный формат (если имя поля совпадает с наименованием переменной, как в age)
const personInfo2 = {
    age, //сокращенные свойства лучше писать сверху, а также сортировать по длине свойства (опционально)
    [firstNamePropertyName]: firstName
}