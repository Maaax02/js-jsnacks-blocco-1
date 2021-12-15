
let array = [];
let sum = 0;
let ask = 0;

do{
    ask = prompt('inserisci numero');
    array.push(ask);
    sum += parseInt(ask);

}while(sum < 50);

console.log(sum);


