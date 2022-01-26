//Input from user
let num1 = prompt("Number 1: ")
let operation = prompt("What operation? Acceptable operations: +,-,(x or *),/: ")
let num2 = prompt("Number 2: ")

//Check that num* contains numbers
if (isNaN(num1)) {
    do_math = false
}else if (isNaN(num2)) {
    do_math = false
}else do_math = true

if(operation==="+"&&do_math){
    result = parseInt(num1, 10) + parseInt(num2, 10)
}else if(operation==="-"&&do_math){
    result = parseInt(num1, 10) - parseInt(num2, 10)
}else if((operation==="x" || operation==="*")&&do_math){
    result = parseInt(num1, 10) * parseInt(num2, 10)
}else if(operation==="/"&&do_math){
    result = parseFloat(num1) / parseFloat(num2)
}else if(do_math){
    result = "Please input a proper operation Plus(+), Minus(-), Times(x or *), Divide(/)"
}else{
    result = "Please input a number"
}



document.body.innerHTML=result;