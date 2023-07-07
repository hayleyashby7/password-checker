const onLoad = () => {
	const password = document.getElementById('password');
	password.addEventListener('input', onInput);
};

const onInput = (input) => {
	const progressBar = document.getElementById('progress-bar');
	progressBar.value = input.target.value.length * 5;
};

document.addEventListener('DOMContentLoaded', onLoad);
