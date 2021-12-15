let ask = prompt('Inserire un numero di 4 cifre');

if (ask < 999){
    alert('inserire un numero DI 4 CIFRE!')
}

if (ask > 9999){
    alert('inserire un numero DI 4 CIFRE!')
}

let sum = 0;

for (x = 0; x < ask.length; x++){
    sum += parseInt(ask[x]);
}
console.log(sum);