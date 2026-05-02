//Immediately invoked Function Expressions (IIFE ):-An IIFE is a JavaScript function
// that runs as soon as it’s defined. It’s written as a function expression and
// immediately invoked—useful for creating a new scope and avoiding polluting the
// global namespace.

function chai(){
    console.log(`DB CONNECTED`);
    
}
chai();

//semicolon is needed to tell iife where to stop 
//while this method is correct but can be affected by global scope of some variables 
//insted we write iife as :-

//named iife
(function chai2(name){
    console.log(`DB CONNECTED ${name}`);
    
})('Ishitva');   //showcasing if it expects name as well then how its done

//another way of writing iife
( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
})('Ishitva'); 