// 1)
//  a) Calculate the height of the end user's browser screen
console.log("height of browser " + window.outerHeight);

// b) To console the name of the web host
console.log("host " + window.location.hostname);

// c)To show a warning message if there is no https protocol used in the visited website.
var proto = window.location.protocol;
function protoCheck() {
    if (proto !== "https") {
        console.warn("https not used");
    }
    else {
        console.warn("http");
    }
}
protoCheck(proto);

// d)To show an alert message after 10sec while the page is refreshed.
setTimeout(function () {
    alert("alert after 10 seconds");
}, 10000);

// 2) Store your basic details in local storage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 
let userName = document.getElementById('userName');
let userAge = document.getElementById('userAge');
let userMail = document.getElementById('userMail');
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', storage);
function storage() {
    localStorage.setItem('uName', userName.value);
    localStorage.setItem('uAge', userAge.value);
    localStorage.setItem('uMail', userMail.value);
}
console.log("Name:" + localStorage.getItem('uName'));
console.log("Age:" + localStorage.getItem('uAge'));
console.log("Email:" + localStorage.getItem('uMail'));
setTimeout(function () {
    localStorage.removeItem('uName');
    localStorage.removeItem('uAge');
    localStorage.removeItem('uMail');
}, 60000);

// 3)Create a form and submit button, on click of the button store your basic details from the form in the cookies. 
document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit2 = document.querySelector('#btnSubmit2');
    let userName2 = document.querySelector('#userName2');
    let userAge2 = document.querySelector('#userAge2');
    let userMail2 = document.querySelector('#userMail2');
    btnSubmit2.addEventListener('click', () => {
        setCookie("userName2", userName2.value, 365);
        setCookie("userAge2", userAge2.value, 365);
        setCookie("userMail2", userMail2.value, 365);
    });

    function setCookie(name, value, expDate) {
        let date = new Date();
        date.setTime(date.getTime() + (expDate * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name} = ${value}; ${expires}; path =/`;
    }
});

// 4) Redirect to the homepage of google from the console.
console.log("click to redirect to google " + " www.google.com");

// 5) Create a div with background color red, create buttons
// a)to hide the div

var toHide = document.getElementById('toHide');
toHide.addEventListener('click', hideDiv);
function hideDiv() {
    document.querySelector('#red').style.display = 'none';
}

// b)to change the background color of the div

var changeColor = document.getElementById('changeColor');
changeColor.addEventListener('click', changeBg);
function changeBg() {
    document.querySelector('#red').style.backgroundColor = 'blue';
}

// c)to show your basic details on the div, the details should hide/show, on the click.

var showDetails = document.getElementById('showDetails');
var details = document.getElementById('details');
showDetails.addEventListener('click', viewDetails);
function viewDetails() {
    if (details.style.display === 'block') {
        document.querySelector('#details').style.display = 'none';
    }
    else {
        document.querySelector('#details').style.display = 'block';
    }
}

// 6) Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message that "9 is fully occupied please select another number", when selected any number other than 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should change the background color of the div into a highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before (don't use CSS to attain the hovering functionality)

let message = document.querySelector('.msg');
let select = document.querySelector('select');
let selectItem = select.value;
select.addEventListener('change', selectBox);
function selectBox() {
    if (select.value == '9') {
        selectItem = 10;
        message.textContent = "9 th box is full , try another";
    } else {
        message.textContent = `selected box is ${selectItem}`;
    }
}

let msg = document.querySelector('.msg');
msg.addEventListener('mouseover', background);
function background() {
    msg.style.backgroundColor = "yellow"
}
msg.addEventListener('mouseleave', mouseLeaves);
function mouseLeaves() {
    msg.style.backgroundColor = "teal";
}

// 7)Consider an array with names of 10 programming languages, make 10 buttons by iterating this array, when clicked on each button the name of the programming language should be shown in a corresponding div. 

let program = ["c", "c++", "java", "dart", "dotnet", "python", "html", "javascript", "sql", "jquery"];
let language = document.querySelector('.language');
for (let i = 0; i < program.length; i++) {
    let btn = document.createElement('button');
    btn.innerText = program[i];
    btn.addEventListener('click', function () {
        language.innerHTML = program[i];
    });
    language.appendChild(btn);
}

// 8)Create a form with a text field which when submitted, will change the tab title to whatever is entered, limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted(it shouldn't refresh).
document.addEventListener('DOMContentLoaded', () => {
    let form3 = document.querySelector('.form3');
    // let titleBTN = document.querySelector('.titleBTN');
    let changeTitle = document.querySelector('#changeTitle');
    let titleDiv = document.querySelector('.titleDiv');
    form3.addEventListener('submit', titleChange);
    function titleChange(event) {
        event.preventDefault();
        let tabTitle = changeTitle.value.trim();
        if (tabTitle.length < 50) {
            document.title = tabTitle;
        }
        else {
            titleDiv.textContent = "Length should not exceeds 50"
        }
    }
});

// 9)When the control+enter key is pressed show an alert message. 
let key = document.querySelector('#key');
key.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
        alert("keyup event works")
    }
});

