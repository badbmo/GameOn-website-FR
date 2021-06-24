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
const modalForm = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const submitBtn = document.querySelectorAll(".btn-submit");
const location = document.querySelectorAll(".checkbox-input[name=location]");
const checkboxCondition = document.getElementById("checkbox1");

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
submitBtn.forEach((e) => e.addEventListener("click", validate));
/* AIDE pas utile car mis dans HTML mais est-ce une bonne pratique (compatibilité avec nav ?)*/

// submit modal form

const firstNameValidate = () => {
	if (firstName.value.length < 2 || firstName.value == null || !/^[A-Za-z]+$/.test(firstName.value)) {
		console.log("nope");
	} else {
		return true;
	}
};

const lastNameValidate = () => {
	if (lastName.value.length < 2 || lastName.value == null || !/^[A-Za-z]+$/.test(firstName.value)) {
		console.log("nope");
	} else {
		return true;
	}
};

const emailValidate = () => {
	if (email.value == null || !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email.value)) {
		console.log("nope");
	} else {
		return true;
	}
};

const birthdateValidate = () => {
	if (birthdate.value == null || !/^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/.test(birthdate.value)) {
		console.log("nope");
	} else {
		return true;
	}
};
/*AIDE si temps de le faire, mettre une condition supp que la date < today*/

const quantityValidate = () => {
	if (quantityTournament.value == null || !/^[0-9]+$/.test(quantityTournament.value)) {
		console.log("nope");
	} else {
		return true;
	}
};

const locationValidate = () => {
	for (let radio of location) {
		if (radio.checked === true) {
			return true;
		} else {
			console.log("nope");
		}
	}
};

const checkboxValidate = () => {
	if (checkboxCondition.checked == null) {
		return true;
	} else {
		console.log("nope");
	}
};

function validate(e) {
	if (
		firstNameValidate() &&
		lastNameValidate() &&
		emailValidate() &&
		birthdateValidate() &&
		quantityValidate() &&
		locationValidate() &&
		checkboxValidate()
	) {
		console.log("tout est bon");
	} else {
		console.log("form pas ok");
	}
}

/* AIDE method="post" ne marche pas */

/* setErrorFor (input, message){
const formControl = input.parentElement;
const small = formControl.querySelector ('small');
formControl.className ="form-control error";
small.innerText = message;
}*/
