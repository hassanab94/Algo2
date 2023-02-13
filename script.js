

let table1 = [];
let table2 = [];
for( i=0 ; i<4 ; i++){
    table1.push(parseInt(prompt("Entrez la note n°" + (i + 1) + " du tableau 1: ")));
    //table2.push(parseInt(prompt("Entrez la note n°" + (i + 1) + " : ")));
}
for( a=0 ; a<4 ; a++){
    table2.push(parseInt(prompt("Entrez la note n°" + (a + 1) + " du tableau 2: ")));
    //table2.push(parseInt(prompt("Entrez la note n°" + (i + 1) + " : ")));
}
let table3 = [...table1, ...table2];
table1.sort((a, b) => a - b);
table2.sort((a, b) => a - b);
// la mediane
median1 = table1[Math.floor(length / 2)];
console.log("La médiane du tableau 1 est " + median1);

median2 = table2[Math.floor(length / 2)];
console.log("La médiane du tableau 2 est " + median2);
//
table3.push({table1,table2});
console.log(table3);


