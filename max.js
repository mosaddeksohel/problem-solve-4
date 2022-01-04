let minister = 1000; 
business = 600; 
army = 800;

function getLargest(){
    if (minister > business && minister > army){
        return minister;
    }
    else if (business > minister && business > army){
        return business;
    }
    else{
        return army;
    }
}

const largest = getLargest (minister, army, business);
console.log('The largest value is ', largest)