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
// DOM Elements - Form
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalForm = document.querySelector("form[name=reserve]");
const firstNameForm = document.getElementById("first");
const lastNameForm = document.getElementById("last");
const emailForm = document.getElementById("email");
const birthdateForm = document.getElementById("birthdate");
const quantityTournamentForm = document.getElementById("quantity");
const radioLocationsForm = document.querySelector("input[name=location]");
const checkboxConditionForm = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

// submit modal event
modalForm.addEventListener("submit", validate);

// submit modal form

let firstNameValidated = false;
let lastNameValidated = false;
let emailValidated = false;
let birthdateValidated = false;
let quantityValidated = false;
let locationValidated = false;
let checkboxValidated = false;

const firstNameValidate = () => {
	if (firstNameForm.value.length < 2 || firstNameForm.value == null || !/^[A-Za-z\-\']+$/.test(firstNameForm.value)) {
		showError(firstNameForm, errorMessages.firstName);
		return firstNameValidated = false;
	} else {
		hideError(firstNameForm);
		return firstNameValidated = true;
	}
};
//Regex: accept letters from A to Z upper or lowercase, accept - and '

const lastNameValidate = () => {
	if (lastNameForm.value.length < 2 || lastNameForm.value == null || !/^[A-Za-z\-\']+$/.test(lastNameForm.value)) {
		showError(lastNameForm, errorMessages.firstName);
		return lastNameValidated = false;
	} else {
		hideError(lastNameForm);
		return lastNameValidated = true;
	}
};
//Regex: accept letters from A to Z upper or lowercase, accept - and '

const emailValidate = () => {
	if (emailForm.value == null || !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailForm.value)) {
		showError(emailForm, errorMessages.email);
		return emailValidated = false;
	} else {
		hideError(emailForm);
		return emailValidated = true;
	}
};
//Regex: (one or more (+)(letters and digits 0 to 9 and _ - .)) @ (one or more (+)(letters and digits 0 to 9 and _ - .)) . (2 to 5 letters)

const compareTime = () => {
	const currentTime = new Date().getTime();
	const choosenTime = new Date(birthdateForm.value).getTime();
	return currentTime > choosenTime;
};

const birthdateValidate = () => {
	if (
		birthdateForm.value == null ||
		!/^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/.test(birthdateForm.value) ||
		compareTime() == false
	) {
		showError(birthdateForm, errorMessages.birthdate);
		return birthdateValidated = false;
	} else {
		hideError(birthdateForm);
		return birthdateValidated = true;
	}
};
//Regex: yyyy-mm-dd (19/20 + 2 digit)-(0 optionnal + 1 digit OR 1 + 1/2/3)-(0 + 1 digit OR 1/2 + 1 digit OR 3 + 0/1)

const quantityValidate = () => {
	if (quantityTournamentForm.value == null || !/^[0-9]+$/.test(quantityTournamentForm.value)) {
		showError(quantityTournamentForm, errorMessages.quantity);
		return quantityValidated = false;
	} else {
		hideError(quantityTournamentForm);
		return quantityValidated = true;
	}
};
//Regex: accept one or more (+) digits [0-9]

const locationValidate = () => {
	if (document.querySelectorAll("input[name=location]:checked").length > 0) {
		hideError(radioLocationsForm);
		return locationValidated = true;
	} else {
		showError(radioLocationsForm, errorMessages.location);
		return locationValidated = false;
	}
};

const checkboxValidate = () => {
	if (checkboxConditionForm.checked == true) {
		hideError(checkboxConditionForm);
		return checkboxValidated = true;
	} else {
		showError(checkboxConditionForm, errorMessages.checkbox);
		return checkboxValidated = false;
	}
};

function validate(e) {
	e.preventDefault();
	firstNameValidate();
	lastNameValidate();
	emailValidate();
	birthdateValidate();
	quantityValidate();
	locationValidate();
	checkboxValidate();
	if (
		firstNameValidated == true &&
		lastNameValidated == true &&
		emailValidated == true &&
		birthdateValidated == true &&
		quantityValidated == true &&
		locationValidated == true &&
		checkboxValidated ==true
	) {
		showSuccessMessage();
		hideFormData();
		modifySubmitButton();
	} else {
		console.log("formulaire incorrect");
	}
}

// Error message

const errorMessages = {
	firstName: "Veuillez entrer 2 caractères ou plus.",
	lastName: "Veuillez entrer 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate: "Veuillez entrer une date de naissance valide.",
	quantity: "Veuillez entrer un nombre.",
	location: "Veuillez sélectionner une option.",
	checkbox: "Veuillez vérifier que vous acceptez les termes et conditions.",
};

const showError = (selectedInput, errorMessage) => {
	selectedInput.parentElement.setAttribute("data-error-visible", "true");
	selectedInput.parentElement.setAttribute("data-error", errorMessage);
};

const hideError = (selectedInput) => {
	selectedInput.parentElement.removeAttribute("data-error-visible");
	selectedInput.parentElement.removeAttribute("data-error");
};

// Success message

const showSuccessMessage = () => {
	const successMessage = document.createElement("span");
	successMessage.id = "success";
	successMessage.appendChild(document.createTextNode("Merci ! Votre réservation a été reçue."));
	modalBody.appendChild(successMessage);
	successMessage.style.position = "absolute";
	successMessage.style.top = "50%";
};

const hideFormData = () => {
	formData.forEach((data) => (data.style.visibility = "hidden"));
};

const modifySubmitButton = () => {
	submitBtn.forEach((btn) => btn.setAttribute("value", "Fermer"));
	submitBtn.forEach((btn) => btn.addEventListener("click", closeModal));
};
