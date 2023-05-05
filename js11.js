const score = document.querySelectorAll("score");
const message = document.querySelectorAll("message");
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    console.log(btns[i]);
  });
}
