const button = document.getElementById('button');
const result = document.getElementById('result');
const author = document.getElementById('author');
const photo = document.getElementById('photo');
const photos = {
	'Walter White':'walter.png',
	'Mike Ehrmantraut':'mike.jpg',
	'Hank Schrader':'hank.jpg',
	'Jesse Pinkman':'jesse.jpg',
	'Saul Goodman':'saul.jpg',
	'Gustavo Fring':'gus.jpg',
	'Skyler White':'skyler.jpg',
	'Badger':'badger.jpg',
	'The fly':'fly.jpg',
}

button.addEventListener('click', getQuote);

function getQuote() {
	fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(res => res.json())
		.then(data => {
            result.innerHTML = data[0].quote
			author.innerHTML = data[0].author
			photo.innerHTML = `<img src='img/${photos[data[0].author]}'/>`
		});
}
