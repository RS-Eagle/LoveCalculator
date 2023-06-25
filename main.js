var change = document.querySelector(".h2-per");
let btn = document.querySelector(".submit1");
var heart = document.querySelector(".fa-solid");
// var hii = ["apple", "banana", "hii"];
// console.log(hii[]);
var i = -1;

const run = () => {
  var a = Math.round(Math.random() * 101);
  btn.disabled = true;

  btn.classList.remove("submit1");

  //   console.log(input2);
  verify(a);
};

const verify = (a) => {
  let input1 = document.querySelector(".input1");
  let input2 = document.querySelector(".input2");

  //   console.log(input1.value);
  if (input1.value == "" || input2.value == "") {
    change.innerHTML = "Input Required";
    btn.disabled = false;
    btn.classList.add("submit1");
  } else {
    i = -1;
    btn.innerHTML = "Calculating...";

    heart.classList.add("fa-beat");

    inc(a);
  }
};

const inc = (a) => {
  i++;
  if (i === a) {
    change.innerHTML = i + "%";
    btn.classList.add("submit1");
    heart.classList.remove("fa-beat");
    btn.innerHTML = "Calculate";

    btn.disabled = false;
    i = -1;
  } else {
    setTimeout(() => {
      change.innerHTML = i + "%";
      inc(a);
    }, 60);
  }
};
