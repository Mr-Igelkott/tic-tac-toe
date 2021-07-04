for (let i = 0; i < 9; i++) {
  document.getElementById("game").innerHTML += '<div class="block"></div>';
}

let step = 0;
const cells = document.getElementsByClassName("block");
let fieldState = [];
for (let i = 0; i < 9; i++) {
  fieldState.push(null);
}

document.getElementById("reset").addEventListener("click", function () {
  for (let i = 0; i < 9; i++) {
    fieldState[i] = null;
  }
  step = 0;
  renderField();
});

document.getElementById("game").addEventListener("click", function (event) {
  //console.log(event.target.innerHTML);
  const index = [...cells].indexOf(event.target);
  if (index !== -1 && fieldState[index] === null) {
    if (step % 2 === 0) {
      fieldState[index] = "x";
    } else {
      fieldState[index] = "o";
    }
    step++;
    renderField();
    setTimeout(check, 0);
  }
});

function renderField() {
  for (let i = 0; i < 9; i++) {
    cells[i].innerHTML = fieldState[i];
  }
}

function check() {
  //crosses
  if (
    cells[0].innerHTML === "x" &&
    cells[1].innerHTML === "x" &&
    cells[2].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[3].innerHTML === "x" &&
    cells[4].innerHTML === "x" &&
    cells[5].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[6].innerHTML === "x" &&
    cells[7].innerHTML === "x" &&
    cells[8].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[0].innerHTML === "x" &&
    cells[3].innerHTML === "x" &&
    cells[6].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[1].innerHTML === "x" &&
    cells[4].innerHTML === "x" &&
    cells[7].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[2].innerHTML === "x" &&
    cells[5].innerHTML === "x" &&
    cells[8].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[0].innerHTML === "x" &&
    cells[4].innerHTML === "x" &&
    cells[8].innerHTML === "x"
  ) {
    alert("First player win");
  }
  if (
    cells[2].innerHTML === "x" &&
    cells[4].innerHTML === "x" &&
    cells[6].innerHTML === "x"
  ) {
    alert("First player win");
  }
  //o's
  if (
    cells[0].innerHTML === "o" &&
    cells[1].innerHTML === "o" &&
    cells[2].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[3].innerHTML === "o" &&
    cells[4].innerHTML === "o" &&
    cells[5].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[6].innerHTML === "o" &&
    cells[7].innerHTML === "o" &&
    cells[8].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[0].innerHTML === "o" &&
    cells[3].innerHTML === "o" &&
    cells[6].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[1].innerHTML === "o" &&
    cells[4].innerHTML === "o" &&
    cells[7].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[2].innerHTML === "o" &&
    cells[5].innerHTML === "o" &&
    cells[8].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[0].innerHTML === "o" &&
    cells[4].innerHTML === "o" &&
    cells[8].innerHTML === "o"
  ) {
    alert("First player win");
  }
  if (
    cells[2].innerHTML === "o" &&
    cells[4].innerHTML === "o" &&
    cells[6].innerHTML === "o"
  ) {
    alert("First player win");
  }
}
