function myfunction(){
    let val1 = document.getElementById("val-1").value
    let val2 = document.getElementById("val-2").value
    let value1 = +val1
    let value2 = +val2
    const add = parseInt(eval(value1 + value2)) 
    const sub = parseInt(eval(value1 - value2)) 
    const multiply = parseInt(eval(value1 * value2)) 
    const divide = parseInt(eval(value1 / value2)) .
    document.write("Total Sum  :- " + add +"<br>" + "Total Subtract  :- " + sub + "<br>" + "Total Multtipication  :-" + multiply)
   

}