const button = document.getElementById('button');
const result = document.getElementById('result');
const author = document.getElementById('author');
const photo = document.getElementById('photo');

button.addEventListener('click', getQuote);

function getQuote() {
	fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(res => res.json())
		.then(data => {
            result.innerHTML = data[0].quote
			author.innerHTML = data[0].author
			if (data[0].author == 'Walter White') {
				photo.innerHTML = `<img src='img/walter.png'/>`
			}
			if (data[0].author == 'Mike Ehrmantraut') {
				photo.innerHTML = `<img src='img/mike.jpg'/>`
			}
			if (data[0].author == 'Hank Schrader') {
				photo.innerHTML = `<img src='img/hank.jpg'/>`
			}
			if (data[0].author == 'Jesse Pinkman') {
				photo.innerHTML = `<img src='img/jesse.jpg'/>`
			}
			if (data[0].author == 'Saul Goodman') {
				photo.innerHTML = `<img src='img/saul.jpg'/>`
			}
			if (data[0].author == 'Gustavo Fring') {
				photo.innerHTML = `<img src='img/gus.jpg'/>`
			}
			if (data[0].author == 'Skyler White') {
				photo.innerHTML = `<img src='img/skyler.jpg'/>`
			}
			if (data[0].author == 'Badger') {
				photo.innerHTML = `<img src='img/badger.jpg'/>`
			}
			if (data[0].author == 'The fly') {
				photo.innerHTML = `<img src='img/fly.jpg'/>`
			}
		});
}







/*
function getQuote() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}
*/