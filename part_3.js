// لديك مصفوفة تحتوي على درجات طلاب.قم بحساب عدد الطلاب الذين حصلوا على درجات أعلى من 50.
console.log("#".repeat(15), "Quiz 13", "#".repeat(15))

let grades = [45, 60, 78, 30, 90];

let n_grades = grades.filter(number => number > 50)
console.log(`There are ${n_grades.length} marks higher than 50`)



// لديك مصفوفة تحتوي على أعمار.قم بإنشاء برنامج يطبع:
// مجموع الأعمار.
// متوسط الأعمار.
// عدد الأشخاص الذين أعمارهم أقل من 18.
console.log("#".repeat(15), "Quiz 14", "#".repeat(15))

let ages = [12, 25, 17, 30, 18, 16];
let total_2 = ages.reduce(function (age, age2) {
    return age + age2
})
console.log(`total = ${total}`)
console.log(`avarge = ${Math.floor(total / ages.length)}`)
let filterd = ages.filter(age => age < 18)
console.log(`there are ${filterd.length} person under 18`)




