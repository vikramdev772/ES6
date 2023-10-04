
function star(n){
    for(var i=0;i<n;i++){
        var s=" ";
        for(var j=0;j<n;j++){
            s=s+" * ";
        }
        console.log(s);
    }
}
console.log("\n\t star pattern \n");

var a=star(4);
console.log(a);

console.log("\n\t triangle \n");

function triangle(n){
    for(var i=1;i<=n;i++){
        var star=" ";
        for(var j=1;j<=i;j++){
            star=star+" * ";
        }
        console.log(star);
        }
}



triangle(5)
















