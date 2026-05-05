import {students} from "./studentdata.js"

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
const remark = document.getElementById("remark")

btn.addEventListener("click", ()=>{

let cuttOffMark = 80

const getNameValue = input.value.trim().toLowerCase()

result.innerHTML= ""

let found = false

students.forEach(student =>{
if(student.name.toLowerCase() === getNameValue){
const p = document.createElement("p")
const h1 = document.createElement("h1")
p.textContent= `Your Score Is: ${student.score}`
h1.textContent= `${student.name}, CONGRATULATIONS, you made it.`
result.appendChild(p)
remark.appendChild(h1)
found = true
// }else if(student.score >= cuttOffMark){
//     const p = document.createElement("p")
//     p.textContent= `${student.name}, CONGRATULATION, you made it.`
//     result.appendChild(p)
//     found = true
}

})

if(!found){
    const p = document.createElement("p")
    p.textContent="Student not found"
    result.appendChild(p)
}
})



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
