let n = 201;

function licz(n){
    if (n > 99 && n < 201){
    result =  "Liczba znajduje się w przedziale";
    } else {
    result = "Liczba nie znajduje się w przedziale";
    }
    return result;
}

console.log(licz(n));