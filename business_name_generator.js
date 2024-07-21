// it has three list of words and it takes random word from each list and makes a new business name 

// the list is as : 
// adjectives - crazy , amazing , fire 
// shop name - engine , foods , garments 
// another word - bros , limited , hub 

let random = Math.random();
let first , second , third ;

if (random<0.33) {
    first = `crazy`    
}
else if (random>0.33 && random<0.66 ) {
    first = `amazing`    
}
else {
    first = `fire`    
}

 random = Math.random();
if (random<0.33) {
    second = `engine`    
}
else if (random>0.33 && random<0.66 ) {
    second = `foods`    
}
else {
    second = `garments`    
}

 random = Math.random();
if (random<0.33) {
    third = `bros`    
}
else if (random>0.33 && random<0.66 ) {
     third = `limited`    
}
else {
     third = `hub`    
}

console.log (`${first} ${second} ${third}`)