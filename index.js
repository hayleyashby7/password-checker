const SHORT = 0;
const OK = 1;
const GREAT = 2;

const onLoad = () => {
	const password = document.getElementById('password');
	password.addEventListener('input', onInput);

	const progressBar = document.getElementById('progress-bar');
	progressBar.classList.add('short');
};

const onInput = (input) => {
	const progressBar = document.getElementById('progress-bar');
	progressBar.value = input.target.value.length * 5;

	switch (validatePassword(input.target.value)) {
		case SHORT:
			shortPassword();
			break;
		case OK:
			okPassword();
			break;
		case GREAT:
			greatPassword();
			break;
		default:
			break;
	}
};

const validatePassword = (password) => {
	if (password.length < 8) return SHORT;
	if (password.length < 12) return OK;
	return GREAT;
};

const shortPassword = () => {
	updateProgressBar('short', ['ok', 'great']);
	updateFeedback('Should be longer');
};

const okPassword = () => {
	updateProgressBar('ok', ['short', 'great']);
	updateFeedback('Pretty good');
};

const greatPassword = () => {
	updateProgressBar('great', ['short', 'ok']);
	updateFeedback('Grrrreat!');
};

const updateFeedback = (message) => {
	const feedback = document.getElementById('feedback');
	if (feedback.innerText !== message) feedback.innerText = message;
};

const updateProgressBar = (addValue = '', removeValues = []) => {
	if (addValue === '' && removeValues === []) return;

	const progressBar = document.getElementById('progress-bar');

	if (addValue !== '') {
		if (!progressBar.classList.contains(addValue)) progressBar.classList.add(addValue);
	}

	if (removeValues !== []) {
		removeValues.forEach((removeValue) => {
			if (progressBar.classList.contains(removeValue)) progressBar.classList.remove(removeValue);
		});
	}
};

document.addEventListener('DOMContentLoaded', onLoad);
