let n = 134;

function myFun(a){
    let result;
    if (a > 99 && a < 201){
    result =  "Liczba znajduje się w przedziale";
    } else {
    result = "Liczba nie znajduje się w przedziale";
    }
    return result;
}

console.log(myFun(n));