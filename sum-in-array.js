const numbers = [12, 15, 20, 25, 5, 33, 35, 36]
let sum = 0; 
for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        console.log('the total value is',sum )
    }



function getSum(){
    let numbers = [12, 15, 20, 25, 5, 33, 35, 36]
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = element + sum;
    }
    return sum;
}


total = getSum(12, 15, 20, 25, 5, 33, 35, 36);
console.log('The total value is', total)


