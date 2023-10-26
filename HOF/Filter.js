
const country = ["India","Usa","Uk","Uae","Japan","china"];

country.filter((a)=>console.log(a));


// India
// Usa
// Uk
// Uae
// Japan
// china




let r=country.filter((args)=>args.includes("U"));
console.log(r);

[ 'Usa', 'Uk', 'Uae' ]

console.log(country.filter((p)=>country.includes("Uk")));

[ 'India', 'Usa', 'Uk', 'Uae', 'Japan', 'china' ]


