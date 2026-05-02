/*
                          Javascript Execution Context
             ______________________|__________________________
            |                      |                          |
Global Execution Context   Function Execution Context   Eval Execution Context
  |                         
  |-> Creation Phase         
  |-> Execution Phase       


let val1 = 10
let val2 = 5
function addNum(a,b){
    let total = a+b
    return total 
}
let result = addNum(val1,val2)
let result2 = addNum(10,2)

                   Steps
1. Global Execution Context is created and pushed to the call stack
2. Global code is executed line by line and when the function is called a new Function Execution Context is created and pushed to the call stack
3. After the function execution is completed the Function Execution Context is popped out of the call stack and control goes back to the Global Execution Context

Memory Phase: During this phase, memory is allocated for variables and functions. Variables are initialized with undefined and functions are stored in memory.
              val1 -> undefined
              val2 -> undefined
              addNum -> function definition

Execution Phase: During this phase, the code is executed line by line. When a function is called, a new Function Execution Context is created and pushed to the call stack. The function code is executed and after completion, the Function Execution Context is popped out of the call stack.
              val1 -> 10
              val2 -> 5
              addNum -> function definition
              result -> 15
              result2 -> 12

result = addNum(val1, val2) ke liye:
    |
    |-> New Variable Environment and Execution thread is created for each function call which holds the variables and parameters of that function. It also has a reference to its outer environment which is the Global Execution Context in this case of addNum function call stored in result.
        Memory phase: 
                    val1 -> undefined
                    val2 -> undefined
                    total -> undefined
        Execution phase:
                    val1 -> 10
                    val2 -> 5
                    total -> 15
                    total gets returned to global context upon execution

result = addNum(10,2) ke liye:
    |
    |-> New Variable Environment iske iye bhi create hoga
        Memory phase:
                    val1 -> undefined
                    val2 -> undefined
                    total -> undefined
        Execution phase:
                    val1 -> 10
                    val2 -> 2
                    total -> 12
                    total gets returned to global context upon execution           
*/
