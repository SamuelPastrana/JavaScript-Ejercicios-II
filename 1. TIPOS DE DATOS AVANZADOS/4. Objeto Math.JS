/*
console.log(Math.PI);
console.log(Math.min(1,2,3,4,5,6,7,-8));
console.log(Math.max(1,2,3,4,5,6,7,-8));
console.log(Math.round(7.886587656543));
console.log(Math.floor(7.886587656543));
console.log(Math.ceil(7.1111111111111));
*/

function generarNumero(numMax){
    return Math.round(Math.random() * numMax)+1;
};
console.log(generarNumero(12));