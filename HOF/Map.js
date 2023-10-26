
const arr1=[1,2,3,4,5];

// arr1.map((v)=>console.log(v*v));

const varr1 = arr1.map((v)=>console.log(v*v));

console.log(varr1);

// 1
// 4
// 9
// 16
// 25
// [ undefined, undefined, undefined, undefined, undefined ]


const names=["Tony","Stark","Hulk","Thor"];
names.map((n)=>n.toUpperCase());
console.log(names);


// [ undefined, undefined, undefined, undefined, undefined ]
// [ 'Tony', 'Stark', 'Hulk', 'Thor' ]

