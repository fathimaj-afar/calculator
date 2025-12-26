function calculate(operation){
let num1=Number(document.getElementById("num1").value);
let num2=Number(document.getElementById("num2").value);
let result;

if(operation=="add"){
    result=num1+num2;
}
else if(operation=="sub"){
    result=num1-num2;
}
else if(operation=="mult"){
    result=num1*num2;
}
else if(operation=="div"){
    if(num2==0){
        result="cannot divide number by zero"
    }
    else{
    result=num1/num2;
}
}
else if(operation=="square"){
    result=num1*num2;
}
else if(operation=="cube"){
    result=num1*num2*num1;
}
  document.getElementById("output").innerText = "Result : " + result;
}