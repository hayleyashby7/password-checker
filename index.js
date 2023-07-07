const SHORT = 0;
const OK = 1;

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
		default:
			break;
	}
};

const validatePassword = (password) => {
	if (password.length < 8) return SHORT;
	if (password.length < 12) return OK;
};

const shortPassword = () => {
	updateProgressBar('short');
	updateFeedback('Should be longer');
};

const okPassword = () => {
	updateProgressBar('ok', 'short');
	updateFeedback('Pretty good');
};

const updateFeedback = (message) => {
	const feedback = document.getElementById('feedback');
	if (feedback.innerText !== message) feedback.innerText = message;
};

const updateProgressBar = (addValue = '', removeValue = '') => {
	if (addValue === '' && removeValue === '') return;

	const progressBar = document.getElementById('progress-bar');

	if (addValue !== '') {
		if (!progressBar.classList.contains(addValue)) progressBar.classList.add(addValue);
	}

	if (removeValue !== '') {
		if (progressBar.classList.contains(removeValue)) progressBar.classList.remove(removeValue);
	}
};

document.addEventListener('DOMContentLoaded', onLoad);
