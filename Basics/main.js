

const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function add(a,b){
    return s+b;
}

rl.question('\n\t Enter a num 1 : ',(n1)=>{
    rl.question('\n\t Enter a num 2 : ',(n2)=>{
        const r=add(parseInt(n1),parseInt(n2));
        console.log(` The n1 : ${n1}\n\tThe n2 : ${n2}\n\t add : ${r}`);
        rl.close;
    });
});




