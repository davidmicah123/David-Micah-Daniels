// 'use strict';

let sidebar = document.querySelector(".sidebar");
let sidebarToggler = document.querySelector(".sidebar_toogler");
let body = document.querySelector("body");

sidebar.classList.add("hidden");

sidebarToggler.addEventListener("click", () => {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.toggle("show");
    body.style.overflowY = "hidden";
  }
});

// let progressBar =  document.querySelector('.progress');
// function timer(){
//     // progressBar="70%";
// }
// progressBar.setInterval(timer, 2000);

const translateProgress1 = function () {
  let value = 0;
  let interval = setInterval(function () {
    let progressBar = document.querySelector(".progress1");
    progressBar.style.width = `${value}%`;
    value++;
    if (value == 95) clearInterval(interval);
    progressBar.textContent = "95%"
  }, 50);
};
translateProgress1();


const translateProgress2 = function () {
  let value = 0;
  let interval = setInterval(function () {
    let progressBar = document.querySelector(".progress2");
    progressBar.style.width = `${value}%`;
    value++;
    if (value == 80) clearInterval(interval);
    progressBar.textContent = "80%"
  }, 50);
};
translateProgress2();



const translateProgress3 = function () {
  let value = 0;
  let interval = setInterval(function () {
    let progressBar = document.querySelector(".progress3");
    progressBar.style.width = `${value}%`;
    value++;
    if (value == 80) clearInterval(interval);
    progressBar.textContent = "80%"
  }, 50);
};
translateProgress3();



const translateProgress4 = function () {
    let value = 0;
    let interval = setInterval(function () {
      let progressBar = document.querySelector(".progress4");
      progressBar.style.width = `${value}%`;
      value++;
      if (value == 85) clearInterval(interval);
      progressBar.textContent = "85%"
    }, 50);
  };
  translateProgress4();

  // const translateProgress5 = function () {
  //   let value = 0;
  //   let interval = setInterval(function () {
  //     let progressBar = document.querySelector(".progress5");
  //     progressBar.style.width = `${value}%`;
  //     value++;
  //     if (value == 95) clearInterval(interval);
  //     progressBar.textContent = "95%"
  //   }, 50);
  // };
  // translateProgress5();

  // const translateProgress6 = function () {
  //   let value = 0;
  //   let interval = setInterval(function () {
  //     let progressBar = document.querySelector(".progress6");
  //     progressBar.style.width = `${value}%`;
  //     value++;
  //     if (value == 95) clearInterval(interval);
  //     progressBar.textContent = "95%"
  //   }, 50);
  // };
  // translateProgress6();
      