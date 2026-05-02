let score =null

console.log(typeof score);
let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*

value to       value after            type after
convert        conversion             conversion

"33"              33               number(converting to number)
"33abc"           NaN              number(converting to number)
true               1               number(converting to number)
false              0               number(converting to number)
null               0               number(converting to number)
1                 true             boolean(converting to boolean)
0                 false            boolean(converting to boolean)
" "               false            boolean(converting to boolean)
"Ishitva"         true             boolean(converting to boolean)
33                 33              String(converting to String)

*/
