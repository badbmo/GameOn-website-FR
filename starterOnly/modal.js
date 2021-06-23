function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const modalForm = document.querySelectorAll("#form");
const firstName = document.querySelectorAll("#first");
const lastName = document.querySelectorAll("#last");
const email = document.querySelectorAll("#email");
const birthdate = document.querySelectorAll("#birthdate");
const quantityTournament = document.querySelectorAll("#quantity");
const submitBtn = document.querySelectorAll(".btn-submit");

/* AIDE pourquoi selectorAll et pas document.getElementsByClassName ou document.getElementById */
/* AIDE mieux de séléctionner par id ou par class */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
/* AIDE : Demander des précisions sur pq "forEach" utilisé et "btn" - besoin de le changer ou pas */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
/* AIDE: removeEventListener nécessaire ?*/

// submit modal event
submitBtn.forEach((e)=> e.addEventListener("click", validate));
/* AIDE pas utile car mis dans HTML mais est-ce une bonne pratique (compatibilité avec nav ?)*/

// submit modal form

function validate(e){

e.preventDefault();

  if (firstName === '' || firstName == null) {
    console.log("c'est pas bon");
  } else {
    console.log ("ok");
  };

  if (lastName == "" || lastName == null) {
    console.log("c'est pas bon");
  } else {
    console.log ("ok");
  };

  if (email==1) {
    console.log("c'est pas bon");
  } else {
    console.log ("ok");
    let regex = Regex(/^[a-zA-Z \-àâçéèêëîïôûùüÿñæœ']{2,}$/, 'g');
    return regex.test(String(email).toLowerCase());
  };

  if (birthdate ==1) {
    console.log("c'est pas bon");
  } else {
    console.log ("ok");
  };

  if (isNaN(quantityTournament) || quantityTournament == null) {
    console.log("c'est pas bon");
  } else {
    console.log ("ok");
  };
}
/* AIDE fonction validate dans le HTML + method="post" ne marche pas */

/* setErrorFor (input, message){
const formControl = input.parentElement;
const small = formControl.querySelector ('small');
formControl.className ="form-control error";
small.innerText = message;
}*/