


function starLine(r){
    var star=" ";
    for(var i=0;i<=r;i++){
    star=star+"**";    
    }
    console.log(star);
}
// starLine(5);

function triangle(n){
    for(var i=0;i<=n;i++){
        starLine(i);
    }
    console.log("\n");

}

triangle(6);


 **
 ****
 ******
 ********
 **********
 ************
 **************
