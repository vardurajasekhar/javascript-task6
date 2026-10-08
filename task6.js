// Array Higher-Order Methods — 12 Questions

// Create an array of 5 numbers and use forEach() to print each number.

    let arr1=[1,2,3,4,5]
            arr1.forEach((c,i,oa)=>{
            console.log(c) 
    })

// Create an array of student names and use forEach() to print:
// Hello, <name>

    let studentNames=["raja","sekahr","govind","geeta"]
    studentNames.forEach((c,i,oa)=>{
        console.log("hello"+ c)
    })

// Create an array of numbers and use map() to create a new array containing each number multiplied by 2.

    let arr2=[1,2,3,4,5]
    arr2.map((c,i,oa)=>{
        console.log(c*2)
    })

// Create an array of prices and use map() to add 100 to every price.

    let prices=[10,20,40,50,80]
    prices.map((c,i,oa)=>{
        console.log(c+100)
    })

// Create an array of numbers and use filter() to get only even numbers.

    let numbers=[1,4,9,6,5,4]
    numbers.filter((c,i,oa)=>{
        if(c%2===0){
            console.log(c)
        }
    })

// Create an array of ages and use filter() to get students whose age is greater than or equal to 18.

    let ages=[20,15,30,21,14,50]
    let agedata=ages.filter((c,i,oa)=>{
        return c>=18
    })
    console.log(agedata)

// Create an array of numbers and use find() to find the first number greater than 50.

        let arrrnumbers=[14,15,80,91,3,88]
         let numdata=arrrnumbers.find((c,i,oa)=>{
                return c>50
         }) 
         console.log(numdata)

// Create an array of student objects with name and mark. Use find() to find the first student whose mark is greater than 80.

         let arrobj=[
            student1={
                name:"raja",
                mark:200
            },
            student2={
                name:"shyam",
                mark:1200
            },
            student2={
                name:"sham",
                mark:50
            }
         ]
         let objdata=arrobj.find((c,i,oa)=>{
             return c.mark>80
         })
         console.log(objdata)

// Create an array of numbers and use reduce() to calculate the total sum.

         let reducenumbers=[1,4,58,20,3,1,2]
         let total=reducenumbers.reduce((acc,c,i,oa)=>{
            return acc+c
         },0)
         console.log(total)

// Create an array of prices and use reduce() to calculate the total price.

         let Prices=[200,300,150,100,400]
         let Total=Prices.reduce((acc,c,i,oa)=>{
            return acc+c
         },0)
         console.log(Total)

// Create an array of numbers and use some() to check whether at least one number is greater than 100.

         let somenumbers=[100,101,90,80,150]
         let check=somenumbers.some((c,i,oa)=>{
            return c>100
         })
         console.log(check)

// Create an array of marks and use every() to check whether all students scored above 35.

let studentMarks=[36,50,74,80,55]
let checkevery=studentMarks.every((c,i,oa)=>{
        return c>35
})
console.log(checkevery)

// 🔹 Sort / Join / Array Conversion — 5 Questions

// Create an array of numbers and sort them in ascending order using sort() with a callback.

    let sortarr=[101,100,2,5,4,8,99,54,21]

    let ascending=sortarr.sort((a,b)=>{
        return a-b
    })
    console.log(ascending)

// Create an array of numbers and sort them in descending order.

    let sortarrr=[101,100,2,5,4,8,99,54,21]

    let dscending=sortarr.sort((a,b)=>{
        return b-a
    })
    console.log(dscending)

// Create an array of student names and convert the array into a string using toString().

    let studentNAmes=["raja","sekhar","shaym","mahesh"]

    console.log(studentNAmes.toString())

// Create an array of names and combine them using join() with " - ".

    let arrnames=["raja","sekhar","shaym","mahesh"]

    console.log(arrnames.join("-"))

// Create an array of products and use join() to display them as one sentence separated by commas.

     let Products=["balls","bats","chains"]
     console.log(Products.join(","))

// 🔹 String Methods — 8 Questions

// Create a string "JavaScript" and print the character at index 4 using charAt().

    let String="javascript"
   console.log(String.charAt(4)) 

// Create a string and use charCodeAt() to find the character code of its first character.

    let string="javascript"
    console.log(string.charCodeAt(0))


// Create a string containing "Hello JavaScript" and print its length.

    let str="Hello JavaScript"
    console.log(str.length)

// Create "JavaScript Developer" and use slice() to extract "JavaScript".

    let Str="JavaScript Developer"
    console.log(Str.slice(0,10))

// Create a string containing lowercase text and convert it to uppercase using toUpperCase().

    let lower="javascript"
    console.log(lower.toUpperCase())

// Create a string containing uppercase text and convert it to lowercase using toLowerCase().

    let upper="JAVASCRIPT"
    console.log(upper. toLowerCase())

// Create a string with spaces before and after the text. Remove the extra spaces using trim().

let space=" javascript "
console.log(space.trim())

// Take a sentence from the user using prompt() and use includes(), indexOf(), startsWith(), and endsWith() to check different parts of the sentence.

var sentence = prompt("Enter a sentence:");

console.log(sentence.includes("JavaScript"));
console.log(sentence.indexOf("JavaScript"));
console.log(sentence.startsWith("Hello"));
console.log(sentence.endsWith("!"));

// 🔹 Date Methods — 5 Questions

// Create a new Date object and print the current:

// Year
// Month
// Date
// Day

let data=new Date()
console.log(data.getFullYear())
console.log(data.getMonth())
console.log(data.getDate())
console.log(data.getDay())

// Create a new Date object and print the current:

// Hours
// Minutes
// Seconds
let data1=new Date()
console.log(data1.getHours())
console.log(data1.getMinutes())

console.log(data1.getSeconds())


// Create a date and change its year using setFullYear().

   let data2 = new Date();

console.log(data2);

data2.setFullYear(2003);

console.log(data2);

// Create a date and change its month and date using setMonth() and setDate().

    let data3=new Date()
    
    console.log(data2.setMonth(6))
     console.log(data2.setDate(18))
    console.log(data3)


// Get the user's date of birth using prompt(), create a Date object, and find the day of the week on which they were born.

    let data4=new Date()

    let year=prompt("enter your year")
    let month=prompt("enter your month")
    let date=prompt("enter your date")

    let days=["sun","mon","tue","wed","thrs","fri","sat"]

    data4.setFullYear(year)
    data4.setMonth(month-1)
    data4.setDate(date)
    
    alert(days[data4.getDay()])
