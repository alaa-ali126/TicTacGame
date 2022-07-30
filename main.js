let tund = "x";
let title = document.querySelector(".title");
let array = [];

function end(num1, num2, num3) {
  title.innerHTML = `${array[num1]} Winner`;
  document.getElementById("item" + num1).style.background = "#000";
  document.getElementById("item" + num2).style.background = "#000";
  document.getElementById("item" + num3).style.background = "#000";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    array[i] = document.getElementById("item" + i).innerHTML;
  }
  if (array[1] == array[2] && array[2] == array[3] && array[2] != "") {
    end(1, 2, 3);
  }
  if (array[4] == array[5] && array[5] == array[6] && array[5] != "") {
    end(4, 5, 6);
  }
  if (array[7] == array[8] && array[8] == array[9] && array[8] != "") {
    end(7, 8, 9);
  }
  if (array[1] == array[4] && array[4] == array[7] && array[4] != "") {
    end(1, 4, 7);
  }
  if (array[2] == array[5] && array[5] == array[8] && array[5] != "") {
    end(2, 5, 8);
  }
  if (array[7] == array[8] && array[8] == array[9] && array[8] != "") {
    end(7, 8, 9);
  }
  if (array[3] == array[6] && array[6] == array[9] && array[6] != "") {
    end(3, 6, 9);
  }
  if (array[3] == array[5] && array[5] == array[7] && array[5] != "") {
    end(3, 5, 7);
  } 
}

function play(id) {
  let squares = document.getElementById(id);
  if (tund == "x" && squares.innerHTML == "") {
    squares.innerHTML = "x";
    tund = "o";
    title.innerHTML = "O";
  } else if (tund == "o" && squares.innerHTML == "") {
    squares.innerHTML = "o";
    tund = "x";
    title.innerHTML = "X";
  }
  winner();
}
