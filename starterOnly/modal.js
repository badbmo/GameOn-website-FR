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
const modalForm = document.getElementById("form");
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
submitBtn.forEach((e) => e.addEventListener("click", validate));

// submit modal form

const firstNameValidate = () => {
	if (firstNameForm.value.length < 2 || firstNameForm.value == null || !/^[A-Za-z]+$/.test(firstNameForm.value)) {
		firstNameForm.parentElement.setAttribute("data-error-visible", "true");
		firstNameForm.parentElement.setAttribute("data-error", errorMessages.firstName);
	} else {
		firstNameForm.parentElement.removeAttribute("data-error-visible");
		firstNameForm.parentElement.removeAttribute("data-error");
		return true;
	}
};

const lastNameValidate = () => {
	if (lastNameForm.value.length < 2 || lastNameForm.value == null || !/^[A-Za-z]+$/.test(lastNameForm.value)) {
		lastNameForm.parentElement.setAttribute("data-error-visible", "true");
		lastNameForm.parentElement.setAttribute("data-error", errorMessages.lastName);
	} else {
		lastNameForm.parentElement.removeAttribute("data-error-visible");
		lastNameForm.parentElement.removeAttribute("data-error");
		return true;
	}
};

const emailValidate = () => {
	if (emailForm.value == null || !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailForm.value)) {
		emailForm.parentElement.setAttribute("data-error-visible", "true");
		emailForm.parentElement.setAttribute("data-error", errorMessages.email);
	} else {
		emailForm.parentElement.removeAttribute("data-error-visible");
		emailForm.parentElement.removeAttribute("data-error");
		return true;
	}
};

const birthdateValidate = () => {
	if (
		birthdateForm.value == null ||
		!/^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/.test(birthdateForm.value)
	) {
		birthdateForm.parentElement.setAttribute("data-error-visible", "true");
		birthdateForm.parentElement.setAttribute("data-error", errorMessages.birthdate);
	} else {
		birthdateForm.parentElement.removeAttribute("data-error-visible");
		birthdateForm.parentElement.removeAttribute("data-error");
		return true;
	}
};

const quantityValidate = () => {
	if (quantityTournamentForm.value == null || !/^[0-9]+$/.test(quantityTournamentForm.value)) {
		quantityTournamentForm.parentElement.setAttribute("data-error-visible", "true");
		quantityTournamentForm.parentElement.setAttribute("data-error", errorMessages.quantity);
	} else {
		quantityTournamentForm.parentElement.removeAttribute("data-error-visible");
		quantityTournamentForm.parentElement.removeAttribute("data-error");
		return true;
	}
};

const locationValidate = () => {
	if (document.querySelectorAll("input[name=location]:checked").length > 0) {
		radioLocationsForm.parentElement.removeAttribute("data-error-visible");
		radioLocationsForm.parentElement.removeAttribute("data-error");
		return true;
	} else {
		radioLocationsForm.parentElement.setAttribute("data-error-visible", "true");
		radioLocationsForm.parentElement.setAttribute("data-error", errorMessages.location);
	}
};

const checkboxValidate = () => {
	if (checkboxConditionForm.checked == true) {
		checkboxConditionForm.parentElement.removeAttribute("data-error-visible");
		checkboxConditionForm.parentElement.removeAttribute("data-error");
		return true;
	} else {
		checkboxConditionForm.parentElement.setAttribute("data-error-visible", "true");
		checkboxConditionForm.parentElement.setAttribute("data-error", errorMessages.checkbox);
		return false;
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
		firstNameValidate() &&
		lastNameValidate() &&
		emailValidate() &&
		birthdateValidate() &&
		quantityValidate() &&
		locationValidate() &&
		checkboxValidate()
	) {
		showSuccessMessage();
		hideFormData();
		modifySubmitButton();
	} else {
		console.log("form pas ok");
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
/*
	const showError = (selectedInput, errorMessage) => {
		selectedInput.parentElement.setAttribute("data-error-visible", "true");
		selectedInput.setAttribute("data-error", errorMessage);
	}

	const hideError = (selectedInput) => {
		selectedInput.removeAttribute("data-error-visible");
		selectedInput.removeAttribute("data-error");

	}
	*/

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
	submitBtn.forEach((btn) => btn.setAttribute("value","Fermer"));
	submitBtn.forEach((btn) => btn.addEventListener("click", closeModal));
};
