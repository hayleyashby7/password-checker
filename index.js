const onLoad = () => {
	const password = document.getElementById('password');
	password.addEventListener('input', onInput);
};

const onInput = (input) => {
	console.log(input.target.value);
};

document.addEventListener('DOMContentLoaded', onLoad);
