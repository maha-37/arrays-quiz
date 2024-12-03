// اكتب برنامجاً يخزن أسماء 5 مدن في مصفوفة، ثم اطبع أسماء المدن واحدة تلو الأخرى.
console.log("#".repeat(15), "Quiz_1", "#".repeat(15))
function city(...cities) {
    for (let i = 0; i < cities.length; i++) {
        console.log(`city ${i + 1}: ${cities[i]}`)
    }

}
city("Dubai", "paris", "istanbul", "Cairo", "Tokyo")



// قم بإنشاء مصفوفة تحتوي على أرقام عشوائية، واطبع عدد العناصر الموجودة في المصفوفة باستخدام.length

console.log("#".repeat(15), "Quiz_2", "#".repeat(15))
let numbers_1 = [21, 33, 34, 56, 22]
console.log(numbers_1.length)


//  إضافة العناصر
console.log("#".repeat(15), "Quiz_3", "#".repeat(15))
let array = []
array.push("javascript", "c", "c++")
console.log(array)
























