function getFarenheit(celsius){
    let fareheit = (celsius * 9/5) + 32;
    return fareheit;
}

let newFarenheit = getFarenheit(2);
console.log('The result is', newFarenheit);