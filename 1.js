//1
// let a =Number(prompt('Введите число'));
// if(a%3==0)
//     console.log('Кратно');
// else
//     console.log('Не кратно');
// (a%3==0)? console.log('Кратно'):console.log('Не кратно');

//2
// let a =Number(prompt('Введите число'));
// switch(a){
//     case 1:console.log('ПН');break;
//     case 2:console.log('ВТ');break;
//     case 3:console.log('СР');break;
//     case 4:console.log('ЧТ');break;
//     case 5:console.log('ПТ');break;
//     case 6:console.log('СБ');break;
//     case 7:console.log('ВС');break;
//     default:console.log('Некорректный ввод');break;
// }

//3
// let a =prompt('Введите число');
// !isNaN(a) ? console.log('Число'):console.log('Не число');
   
//4
// let a =prompt('Введите число');
// if(!isNaN(a) && a>0)
//     console.log('+');
// else if(!isNaN(a) && a<0)
//     console.log('-');
// else if(!isNaN(a) && a==0)
//     console.log('0');
// else
//     console.log('Не число');

//5
// let a =prompt('Введите число');
// if(isNaN(a))
//     console.log('Не число');
// else
//     {
//         a = Math.sqrt(Number(a));
//         const roundedSquareRoot = Math.round(a);
//         console.log(roundedSquareRoot);
//     }

//6
// let a = prompt('Скорость 1');
// let b = prompt('Скорость 2');
// let c = prompt('Расстояние');
// if(isNaN(a) || isNaN(b) || isNaN(c))
//     console.log('Некорректный ввод');
// else
//     {
    
//        let d = Number(c)/(Number(a)+Number(b));
//        console.log(d);
//     }

//7
// let a =prompt('Введите число');
// if(isNaN(a))
//     console.log('Не число');
// else
//     {
//         a=Number(a);
//         switch(a){
//             case 1 :case 2: case 12: console.log('Зима'); break;
//             case 3: case 4 : case 5: console.log('Весна'); break;
//             case 6: case 7 : case 8: console.log('Лето'); break;
//             case 9: case 10 : case 11: console.log('Осень'); break;
//             default: 'Некорректный ввод'; break;
//         }
//     }

//8
// let a =prompt('Введите число');
// if(isNaN(a))
//     console.log('Не число');
// else
//     {
//         switch(a){
//             case '1': console.log('Зима'); break;
//             case '2':  console.log('Весна'); break;
//             case '3': console.log('Лето'); break;
//             case '4': console.log('Осень'); break;
//             default: console.log('Некорректный ввод'); break;
//         }
//     }

//9
// let a =prompt('Введите число');
// if(isNaN(a))
//     console.log('Не число');
// else if(a==0)
//     {
//         console.log('Обратного нет');
//     }
// else    
//     {
//         a=Number(a);
//        console.log(1/a);
//     }

//10
// const inputValue = prompt("Введите количество сантиметров:");
// const centimeters = parseFloat(inputValue);
// if (isNaN(centimeters) || centimeters < 0) {
//     console.log("Пожалуйста, введите корректное неотрицательное число.");
// } else {
//     const meters = Math.floor(centimeters / 100);
//     console.log(`${centimeters} сантиметров = ${meters} полных метров.`);
// }

//11
// let a =prompt('Введите строку');
// if(a=='hschool')
//     console.log(true);
// else
//     console.log(false);

//12
// let a = prompt('a');
// let b = prompt('b');
// if(isNaN(a) ||isNaN(b))
//     console.log('Не число');
// else
//     {  
//         a=Number(a);
//         b=Number(b);
//         console.log("I'm", a+b)
//     }

//13
// let a =prompt('Введите число');
// if(isNaN(a))
//     console.log('Не число');
// else
//     {
//         switch(a){
//             case '1': console.log('Очень плохо'); break;
//             case '2':  console.log('Плохо'); break;
//             case '3': console.log('Удовлетворительно'); break;
//             case '4': console.log('Хорошо'); break;
//             case '5': console.log('Отлично'); break;
//             default: console.log('Некорректный ввод'); break;
//         }
//     }

//14
function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

function checkTriangle(a, b, c) {
    // Проверка на ввод только чисел
    if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
        return "Ошибка: Вводите только числа.";
    }

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    // Проверка существования треугольника
    if (a + b > c && a + c > b && b + c > a) {
        // Определение типа треугольника
        if (a === b && b === c) {
            return "Равносторонний треугольник.";
        } else if (a === b || a === c || b === c) {
            return "Равнобедренный треугольник.";
        } else {
            return "Разносторонний треугольник.";
        }
    } else {
        return "Треугольник не существует.";
    }
}

// Пример использования
const a = prompt("Введите первую сторону треугольника (a):");
const b = prompt("Введите вторую сторону треугольника (b):");
const c = prompt("Введите третью сторону треугольника (c):");

const result = checkTriangle(a, b, c);
alert(result);