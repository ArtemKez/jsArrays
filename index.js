console.log('concat\n' +
    'Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.\n');

function concat(arr1, arr2) {
    return arr1.concat(arr2)
}

console.log(concat([1, 2, 3], [4, 5, 6]))

console.log('reverse\n' +
    'Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].\n');

function reverse(arr) {
    return arr.reverse()
}

console.log(reverse([1, 2, 3]))

console.log('push\n' +
    'Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.\n')

function push(arr) {
    arr.push(4, 5, 6)
    return arr
}

console.log(push([1, 2, 3]))

console.log('unshift\n' +
    'Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.\n')

function unshift(arr) {
    arr.unshift(4, 5, 6)
    return arr
}

console.log(unshift([1, 2, 3]))

console.log('shift\n' +
    'Дан массив [\'js\', \'css\', ‘html\']. Выведите на экран первый элемент и удалите его.\n')

function shift(arr) {
    return arr.shift();
}

console.log(shift(['js', 'css', 'html']))

console.log('pop\n' +
    ' Дан массив [\'js\', \'css\', ‘html\']. Выведите на экран последний элемент и удалите его.\n')

function pop(arr) {
    return arr.pop()
}

console.log(pop(['js', 'css', 'html']))

console.log('slice\n' +
    'Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].\n')

function slice1(arr) {
    let arr2
    arr2 = arr.slice(0, 3)
    return arr2
}

console.log(slice1([1, 2, 3, 4, 5]))

console.log('slice\n' +
    'Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].\n')

function slice2(arr) {
    let arr2
    arr2 = arr.slice(-2)
    return arr2
}

console.log(slice2([1, 2, 3, 4, 5]))

console.log('splice\n' +
    ' Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].\n')

function splice1(arr) {
    arr.splice(1, 2)
    return arr
}

console.log(splice1([1, 2, 3, 4, 5]))

console.log('splice\n' +
    'Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].\n')

function splice2(arr) {
    let arr2
    arr2 = arr.splice(1, 3)
    return arr2
}

console.log(splice2([1, 2, 3, 4, 5]))

console.log('splice\n' +
    ' Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, \'a\', \'b\', \'c\', 4, 5].\n')

function splice3(arr) {
    arr.splice(3, 0, 'a', 'b', 'c')
    return arr
}

console.log(splice3([1, 2, 3, 4, 5]))

console.log('splice\n' +
    ' Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, \'a\', \'b\', 2, 3, 4, \'c\', 5, \'e\'].\n')

function splice4(arr) {
    arr.splice(1, 0, 'a', 'b')
    arr.splice(-1, 0, 'c')
    arr.splice(arr.length, 0, 'e')
    return arr
}

console.log(splice4([1, 2, 3, 4, 5]))

console.log('sort\n' +
    'Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.\n')

function sort(arr) {
    return arr.sort()
}

console.log(sort([3, 4, 1, 2, 7]))

console.log('Object.keys\n' +
    'Дан объект {js:\'test\', jq: \'hello\', css: \'world\'}. Получите массив его ключей.\n')

function objectKeys(obj) {
    return Object.keys(obj)
}

console.log(objectKeys({js: 'test', jq: 'hello', css: 'world'}))

console.log('Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет')

function hasElem(arr, str) {
    return arr.some(el => el === str)
}

console.log(hasElem(['1', '2', '3', '4', '5'], '5'))

console.log('Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.')

function arrNums(arr, num) {
    return arr.indexOf(num) !== -1
}

console.log(arrNums([6, 5, 3, 123, 4, 3, 1], 1))

console.log('Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.')

function twoNums(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(twoNums([1, 2, 3, 6, 4, 5, 5, 2, 1]))

console.log('Заполните массив 10 случайными числами в диапазоне от 15 до 78. Math.random()')

function mathRandom() {
    let arr = [];
    while (arr.length < 10) {
        arr.push(Math.round(Math.random() * 63 + 15))
    }
    return arr;
}

console.log(mathRandom())

console.log('Дан массив 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. ')

function mathMaxMin(arr) {
    let arrMaxMin = [];
    arrMaxMin.push(Math.max(...arr));
    arrMaxMin.push(Math.min(...arr));
    return arrMaxMin;
}

console.log(mathMaxMin([4, -2, 5, 19, -130, 0, 10]))

console.log('Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.')

function srAr(arr) {
    let arrSum = 0;
    const len = arr.length
    for (let i = 0; i < len; i++) {
        arrSum = arrSum + arr[i]
    }
    return arrSum / len;
}

console.log(srAr([12, 15, 20, 25, 59, 79]))