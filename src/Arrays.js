/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
function СompareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
export function arraySorting(data) {
    let per = '';
    let arr = new Array();

    for (let i = 0; i < data.length; i++) {
        if (data[i] == ',') {
            arr.push(+per);
            per = '';
        } else per += data[i];
    }
    arr.push(+per);
    arr.sort(СompareNumeric);
    per = '';

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            per += arr[i];
        } else {
            per += arr[i];
            per += ',';
        }
    }

    return per;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = data.filter(function (n) {
        return n < 101;
    });
    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arr = new Array();
    for (let i = 0; i < 5; i++) {
        arr.push(array1[i]);
        arr.push(array2[i]);
    }
    return arr;
}
