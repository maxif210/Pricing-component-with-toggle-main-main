const basic = document.querySelector("#basic");
const professional = document.querySelector("#professional");
const master = document.querySelector("#master");
const input = document.querySelector("#checkbox");

checkbox.addEventListener("click", () => {
  if (input.checked === true) {
    basic.textContent = "$19.99";
    professional.textContent = "$24.99";
    master.textContent = "$39.99";
  } else {
    basic.textContent = "$199.99";
    professional.textContent = "$249.99";
    master.textContent = "$399.99";
  }
  
});



// if (input===true){
//     precio1.classList.add("display");
//     precio2.classList.remove("display")
// }
// else{
//     precio1.classList.remove("display");
//     precio2.classList.add("display")
// }

// })
