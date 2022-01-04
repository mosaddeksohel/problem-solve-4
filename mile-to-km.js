function mileToKm(mile) {
    let km = mile * 1.60934;
    return km;
}


let marathon = mileToKm(26.2);
console.log('The converted mile is ', marathon);