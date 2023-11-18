const o = document.body.querySelector(".oupt");

function p() {
  let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("\n\t promise is created in 2 sec \n");
      o.textContent = "promise is created in 2 sec";
    }, 2000);
    let a = "Sucessfully resolved";
    resolve(a);
  });
  //return a value
  p.then((value) => {
    console.log(value);
  });

  let r = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("\n\t second promise is created in 5sec  ");
      o.textContent = "second promise is created in 5sec";
    }, 5000);
    reject(new Error("\n\t Error is occured \n"));
  });

  r.then((v) => console.log(v));
  r.catch((error) => {
    console.log(error);
    o.textContent = error;
  });
}
