export const validateForm = (data) => {
	const errors = {};
	if (!data.cardholderName.trim()) {
		errors.name = "Cardholder name cannot be blank";
	} else if (!/^[A-Za-z ]+$/.test(data.cardholderName)) {
		errors.name = "Wrong Format";
	}
	if (!data.cardNumber.trim()) {
		errors.cardNumber = "Can't be blank";
	} else if (/[a-zA-Z]/.test(data.cardNumber)) {
		errors.cardNumber = "Wrong format, numbers only";
	}

	if (!data.month.trim()) {
		errors.month = "Can't be blank";
	}

	if (!data.year.trim()) {
		errors.year = "Can't be blank";
	}

	if (!data.cvc.trim()) {
		errors.cvc = "Can't be blank";
	}

	return errors;
};
