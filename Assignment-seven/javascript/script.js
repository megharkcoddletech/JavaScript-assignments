let box = document.getElementsByClassName('box');
let btn = document.querySelector('.btn');
let count = 0;
let check = 'X';
let check2 = 'O';
let msg = ["Player One is the winner 🎉 ", "Player two is the winner 🎉", "it's a draw"];
let result = document.querySelector('.container')
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {
        if (box[i].textContent === null || box[i].textContent === '') {
            count += 1;
            if (count % 2 === 0) {
                box[i].textContent = "O";
            }
            else {
                box[i].textContent = "X";
            }
        }
        if ((box[0].textContent === check && box[1].textContent === check && box[2].textContent === check) ||
            (box[3].textContent === check && box[4].textContent === check && box[5].textContent === check) ||
            (box[6].textContent === check && box[7].textContent === check && box[8].textContent === check) ||
            (box[0].textContent === check && box[3].textContent === check && box[6].textContent === check) ||
            (box[1].textContent === check && box[4].textContent === check && box[7].textContent === check) ||
            (box[2].textContent === check && box[5].textContent === check && box[8].textContent === check) ||
            (box[0].textContent === check && box[4].textContent === check && box[8].textContent === check) ||
            (box[2].textContent === check && box[4].textContent === check && box[6].textContent === check)) {
            return result.textContent = msg[0];
        }
        if ((box[0].textContent === check2 && box[1].textContent === check2 && box[2].textContent === check2) ||
            (box[3].textContent === check2 && box[4].textContent === check2 && box[5].textContent === check2) ||
            (box[6].textContent === check2 && box[7].textContent === check2 && box[8].textContent === check2) ||
            (box[0].textContent === check2 && box[3].textContent === check2 && box[6].textContent === check2) ||
            (box[1].textContent === check2 && box[4].textContent === check2 && box[7].textContent === check2) ||
            (box[2].textContent === check2 && box[5].textContent === check2 && box[8].textContent === check2) ||
            (box[0].textContent === check2 && box[4].textContent === check2 && box[8].textContent === check2) ||
            (box[2].textContent === check2 && box[4].textContent === check2 && box[6].textContent === check2)) {
            return result.textContent = msg[1];
        }
        if (count === box.length) {
            result.textContent = msg[2];
        }
    }
    );
}
btn.addEventListener('click', restart);
function restart() {
    location.reload(true);
}