import {students} from "./studentdata.js"

//THESE ARE GLOBAL VARIABLES AND CAN BE USED ANYWHERE IN THE PROGRAMM
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
const remark = document.getElementById("remark")
const p = document.createElement("p")
const h1 = document.createElement("h1")
let cuttOffMark = 80


//ANY VARIABLE BELOW THE BTN FUNCTION IS A LOCAL VARIABLE, ONLY USED WITHIN THE FUNCTION
btn.addEventListener("click", ()=>{
const getPhoneValue = input.value.trim()

result.innerHTML= ""
remark.innerHTML= ""

let found = false

const student = students.find(
s => s.phone === getPhoneValue
)


if(!student){
p.textContent= `Student not found`
h1.textContent= "Please use your phone number to check your score."
result.appendChild(p)
remark.appendChild(h1)
found = true
}

if(student.score >= cuttOffMark){
    p.textContent= `${student.name}, your score is ${student.score}`
    h1.textContent= "CONGRATULATIONS, you made it."
    result.appendChild(p)
    remark.appendChild(h1)
}else{
    p.textContent= `${student.name}, your score is ${student.score}`
    h1.textContent= "SORRY, try next cohort."
    result.appendChild(p)
    remark.appendChild(h1)
}
})
input.addEventListener("focus", ()=>{
    if(!input.value !== ""){
        input.value =""
        p.textContent= ""
        h1.textContent= ""
    }
})





// if(!found){
//     p.textContent="Student not found"
//     result.appendChild(p)
// }



/* Determine an eligible student by name, if they 
 enter their name and press btn score score appear.
 


 */


// studentsData.forEach(student =>{
//     const p = document.createElement("p")
//   p.textContent=`Name: ${student.name} - Score: ${student.score}`
//   if(student.score >= 80){
//     p.style.backgroundColor="green"
//   }else{
//     p.style.backgroundColor="red"
//   }
//     result.appendChild(p)
// })


// Seperate by score the names whose score is above 80% and those who scored below 80%

// studentsData.filter(passedNames =>{
//     const p = document.createElement("p")
//     if(passedNames.score >= 80){
//         p.textContent=`Name: ${passedNames.name} - ${passedNames.score}` 
//     }
//     high.appendChild(p)
// })

// studentsData.filter(failedNames =>{
//     const p = document.createElement("p")
//     if(failedNames.score < 80){
//         p.textContent=`Name: ${failedNames.name} - ${failedNames.score}` 
//     }
//     low.appendChild(p)
// })



// btn.addEventListener("click", () =>{
//     const students = studentsData.find(student =>
//     student.name.toLowerCase() === getNameValue
// )
//     if(students === passedNames){
//       result.textContent=`Your Score Is`
//     }
// })
