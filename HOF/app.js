

const callback = (n) =>{
    return n**2;
}
function cube (callback,n){
    return callback(n)*n;
}
console.log(cube);

console.log("\n\t Cube :"+cube(callback,2));

// [Function: cube]

// 	 Cube :8

let sum=(a,b)=>{
    return a+b;
}

const s=(n)=>{
    return n*n;
}

function c(a,b){
    
    return s(b)+s(a)+2*(a*b);

}

console.log("\n\t (a+b)^2 : "+c(2,3));

// (a+b)^2 : 25



