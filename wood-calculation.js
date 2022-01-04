function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const chair = 3;
    const table = 10;
    const bed = 50;

    const chairWood = chairQuantity * chair;
    const tableWood = tableQuantity * table;
    const bedWood = bedQuantity * bed;
    const total = chairWood + tableWood + bedWood;
    return total;
}

const allWood = woodCalculation(1, 1, 1);
console.log(allWood);