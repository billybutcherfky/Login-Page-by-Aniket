const fieldsets = document.querySelectorAll("#msform fieldset");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".previous");
const progressbar = document.querySelectorAll("#progressbar li");

let current = 0;

function showStep(index) {
  fieldsets.forEach((fs, i) => {
    fs.classList.toggle("active", i === index);
    progressbar[i].classList.toggle("active", i <= index);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current < fieldsets.length - 1) {
      current++;
      showStep(current);
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showStep(current);
    }
  });
});

// Show the first step initially
showStep(current);
