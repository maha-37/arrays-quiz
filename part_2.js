// قم بكتابة برنامج يسأل المستخدم عن اسم معين ويبحث عنه في مصفوفة.إذا وجد الاسم، اطبع: “الاسم موجود”، وإذا لم يجده، اطبع: “الاسم غير موجود”
console.log("#".repeat(15), "Quiz_4", "#".repeat(15))

let book = prompt("enter the name of the book:");
function book_store(...books) {
    if (books.includes(book))
        console.log('book available')
    else {
        console.log(`book not available`)
    }
}
book_store("Aforizmalar", "Kafka", "The Castle")


// لديك المصفوفة التالية: [45, 22, 60, 10, 78].اكتب برنامجاً يحذف جميع القيم الأقل من 50، واطبع النتيجة النهائية.

console.log("#".repeat(15), "Quiz 5", "#".repeat(15))
let numbers = [45, 22, 60, 10, 78];
let new_array = [];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        new_array.push(numbers[i]);
    }
}
console.log(new_array)

// with filter

let numbers2 = [45, 22, 60, 10, 78];
let filter_numbers = numbers.filter(function (num) {
    return num > 50
})
console.log(filter_numbers)


// لديك مصفوفة تحتوي على أسماء، اكتب برنامجاً يتحقق إذا كان هناك أسماء مكررة.
console.log("#".repeat(15), "Quiz 6", "#".repeat(15))
let names = ["html", "c#", "css", "javascript", "c#"];
let newnames = names.filter(function (name, index) {
    return names.indexOf(name) !== index
})
if (newnames.length > 0) {
    console.log(`${newnames} repeated`);
} else {
    console.log(`there are no repeated names `);
}


// لديك المصفوفة التالية: [10, 15, 20, 25].
// اكتب برنامجاً يحسب مجموع القيم داخل المصفوفة باستخدام reduce.
console.log("#".repeat(15), "Quiz 7", "#".repeat(15))
let numbers3 = [10, 15, 20, 25];
let total = numbers3.reduce(function (num1, num2) {
    return num1 + num2
})
console.log(total)


// اكتب برنامجاً يضاعف كل قيمة داخل المصفوفة باستخدام map.
console.log("#".repeat(15), "Quiz 8", "#".repeat(15))
let numbers4 = [8, 6, 4, 2];
let n_arr = numbers4.map(function (number) {
    return number * 2
})
console.log(n_arr)


// اكتب برنامجاً يرتب المصفوفة تصاعدياً باستخدام sort.
console.log("#".repeat(15), "Quiz 9", "#".repeat(15))
let arr = [4, 1, 8, 3, 5];
arr.sort(function (a, b) { return b - a })
console.log(arr)


// اكتب برنامجاً يدمج المصفوفتين معاً في مصفوفة واحدة.
console.log("#".repeat(15), "Quiz 10", "#".repeat(15))
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
array1 = array1.concat(array2)
console.log(array1)


// اكتب برنامجاً يجد أكبر قيمة وأصغر قيمة داخل المصفوفة.
console.log("#".repeat(15), "Quiz 11", "#".repeat(15))
let array3 = [3, 7, 2, 8, 1, 9];
console.log(`max value => ${Math.max(...array3)} min value => ${Math.min(...array3)}`)

// اكتب برنامجاً يعكس ترتيب العناصر باستخدام reverse.
console.log("#".repeat(15), "Quiz 12", "#".repeat(15))
let array5 = [5, 4, 3, 2, 1];
array5.reverse();
console.log(array5)


