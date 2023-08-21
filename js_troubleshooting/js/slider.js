let a = ["1.jpg", "2.jpg", "3.jpg"];
let selectedIndex = 0;

let prev = document.getElementById('prev');
prev.addEventListener('click', updateImg(0));

let next = document.getElementById('next');
next.addEventListener('click', updateImg(1));

function updateImg(type) {
  if (type === 0) {
    selectedIndex--;
  } else {
    selectedIndex++;
  }

  if (selectedIndex < 0) {
    selectedIndex = a.length - 1;
  } else if (selectedIndex >= a.length) {
    selectedIndex = 0;
  }
  document.getElementById("imgs").src = "./images/" + a[selectedIndex];
}

