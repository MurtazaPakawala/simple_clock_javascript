console.log("checking if everything is fine");

// console.log(date.getHours());
let time;
let date_p;
setInterval(() => {
  // we need to now print the time and date
  const date = new Date();
  time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  // console.log(time);
  document.getElementById("time").innerHTML = time;
  date_p = date.toLocaleDateString();
  // console.log(date_p);
  document.getElementById("date").innerHTML = date_p;
}, 1000);
