
var name="vikram";
var age=20;

var user=["Vikram","Ram","Mark"];

//worst way to write array 
var user1="Vikram";
var age1=20;
var user2="Ram";
var age2=21;

console.log(user1);

//Objects

var User={
    name:"Vikram",
    age:21,
    Phone: 709570423
}
console.log(User);

//primitive done

var users=["Vikram","ram","mark"];
console.log(users[0]); //vikram
console.log(users[10]);//undefined 

for(var i=0;i<users.length;i++){
    console.log(i);
}

var u=[{name:"vikram",age:20},{name:"ram",age:21}];
for(var i=0;i<u.length;i++){
    const tolog = u[i].name+"'s age is"+u[i].age;
    console.log(tolog);
}

for(var i=0;i<users.length;i++){
    console.log("*");
}



