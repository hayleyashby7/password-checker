const onLoad = () => {
	const password = document.getElementById('password');
	password.addEventListener('input', onInput);
};

const onInput = (input) => {
	const progressBar = document.getElementById('progress-bar');
	progressBar.value = progressBar.value + 1;
};

document.addEventListener('DOMContentLoaded', onLoad);
