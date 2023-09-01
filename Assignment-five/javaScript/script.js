
document.addEventListener('DOMContentLoaded', (e) => {
   e.preventDefault()
   let userName = document.querySelector('#userName');
   let phone = document.querySelector('#phone');
   let place = document.querySelector('#place');
   let company = document.querySelector('#company');
   let pin = document.querySelector('#pin');
   let form = document.querySelector('form');
   let errorName = document.querySelector('.errorName');
   let errorPhone = document.querySelector('.errorPhone');
   let errorPlace = document.querySelector('.errorPlace');
   let errorCompany = document.querySelector('.errorCompany');
   let errorPin = document.querySelector('.errorPin');
   let prepopulate = document.querySelector('#prepopulate');
   prepopulate.disabled = true;

   // a)
   // if any of the fields are empty on submitting it should show corresponding error messages below all the required fields.
   let uNameCheck;
   let checkPhoneValue;
   let checkPlaceValue;
   let checkCompanyValue;
   let checkPinValue;
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      let uName = userName.value.trim();
      if (uName === null || uName === '') {
         errorName.textContent = "Enter your name";
         uNameCheck = 0;
      }
      else {
         uNameCheck = 1;
      }
      let checkPhone = phone.value.trim();
      if (checkPhone === '' || checkPhone === null) {
         errorPhone.textContent = "Enter your phone number";
         checkPhoneValue = 0;
      }
      else {
         checkPhoneValue = 1;
      }
      let checkPlace = place.value.trim();
      if (checkPlace === null || checkPlace === '') {
         errorPlace.textContent = "enter your place";
         checkPlaceValue = 0;
      }
      else {
         checkPlaceValue = 1;
      }
      let checkCompany = company.value.trim();
      if (checkCompany === null || checkCompany === '') {
         errorCompany.textContent = "enter your company";
         checkCompanyValue = 0;
      }
      else {
         checkCompanyValue = 1;
      }
      let checkPin = pin.value.trim();
      if (checkPin === '' || checkPin === null) {
         errorPin.textContent = "enter your pincode";
         checkPinValue = 0;
      }
      else {
         checkPinValue = 1;
      }

      // b)?"
      // "pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.
      let checkPhoneSign;
      let checkPinSign;
      if (checkPhone < 0) {
         errorPhone.textContent = "negative values are not alloweded";
         checkPhoneSign = 0;
      }
      else {
         checkPhoneSign = 1;
      }
      if (checkPin < 0) {
         errorPin.textContent = "pincode should not be negtaive";
         checkPinSign = 0;
      }
      else {
         checkPinSign = 1;
      }

      // c)  
      // The minimum length of the phone number should be 10, otherwise, show the corresponding error msg below the mobile no. field. 
      let checkPhoneLength;
      if (checkPhone.length != 10) {
         errorPhone.textContent = "phone number should contain 10 values"
         checkPhoneLength = 0;
      }
      else {
         checkPhoneLength = 1;
      }

      // d)
      // On submission of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).
      if ((uNameCheck == 1) && (checkPhoneValue == 1) && (checkPlaceValue == 1) && (checkCompanyValue == 1) && (checkPinValue == 1) &&
         (checkPinSign == 1) && (checkPhoneSign == 1) && (checkPhoneLength == 1)) {
         localStorage.setItem('name', uName);
         localStorage.setItem('number', checkPhone);
         localStorage.setItem('place', checkPlace);
         localStorage.setItem('company', checkCompany);
         localStorage.setItem('pin', checkPin);
         errorName.textContent = " ";
         errorPhone.textContent = " ";
         errorPlace.textContent = " ";
         errorCompany.textContent = " ";
         errorPin.textContent = " ";
         prepopulate.disabled = false;
         form.reset();
      }
   });

   // e) 
   // Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise, the button will be disabled.

   prepopulate.addEventListener('click', () => {
      userName.value = localStorage.getItem('name');
      phone.value = localStorage.getItem('number');
      place.value = localStorage.getItem('place');
      company.value = localStorage.getItem('company');
      pin.value = localStorage.getItem('pin');
      prepopulate.disabled = true;
   }
   )

   // 2)
   // Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.

   const container = document.createElement("div");
   document.body.appendChild(container);
   container.style.height = '200px';
   container.style.backgroundColor = 'red';
   const button = document.createElement("button");
   button.textContent = "Get Details";
   document.body.appendChild(button);
   const paraOne = document.createElement("p");
   paraOne.innerHTML = "Name : Ram";
   container.appendChild(paraOne);
   const paraTwo = document.createElement("p");
   paraTwo.innerHTML = "Age : 30";
   container.appendChild(paraTwo);
   const paraThree = document.createElement("p");
   paraThree.innerHTML = "place : Calicut";
   container.appendChild(paraThree);
   button.addEventListener('click', () => {
      if (container.style.display === "none") {
         container.style.display = "block";
      }
      else {
         container.style.display = "none";
      }
   }
   );
});

// 3)
// Create a private variable and console it by accessing it.

class Vegitables {
   #rippen = 5;
   ripenValue() {
      return this.#rippen;
   }
}
let veg = new Vegitables()
console.log(`private: ${veg.ripenValue()}`)

// 4)
// Create a static variable and console it by accessing it.

class Fruits {
   static numberOfFruits = 0;

   constructor(name) {
      this.name = name;
      Fruits.numberOfFruits += 1;
   }
}
let fruitOne = new Fruits("Apple");
let fruittwo = new Fruits("orange");
console.log(fruitOne.name);
console.log(fruittwo.name);
console.log(`Static: ${Fruits.numberOfFruits}`);