const onLoad = () => {
	const password = document.getElementById('password');
	password.addEventListener('input', onInput);

	const progressBar = document.getElementById('progress-bar');
	progressBar.classList.add('short');
};

const onInput = (input) => {
	const progressBar = document.getElementById('progress-bar');
	progressBar.value = input.target.value.length * 5;

	if (validatePassword(input.target.value)) {
		progressBar.classList.remove('short');
	} else {
		if (!progressBar.classList.contains('short')) progressBar.classList.add('short');
	}
};

document.addEventListener('DOMContentLoaded', onLoad);

const validatePassword = (password) => password.length >= 8;
