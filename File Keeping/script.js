const addButton = document.querySelector('#add');

const updateLocalStorageData = () => {
	const textArea = document.querySelectorAll('textArea');
	const notes = [];

	textArea.forEach(note => {
		return notes.push(note.value);
	});

	localStorage.setItem('notes', JSON.stringify(notes));
};

const addNewNote = (text = '') => {
	const note = document.createElement('div');
	note.classList.add('note');

	const htmlData = `<div class="tools">
				<button class="edit"><i class="fas fa-edit"></i></button>
				<button class="delete"><i class="fas fa-trash-alt"></i></button>
			</div>

			<div class="main ${text ? '' : 'hidden'}"></div>
			<textarea class="${text ? 'hidden' : ''}"></textarea>
			`;
	note.insertAdjacentHTML('afterbegin', htmlData);

	//getting the reference
	const editButton = note.querySelector('.edit');
	const delButton = note.querySelector('.delete');
	const mainDiv = note.querySelector('.main');
	const textArea = note.querySelector('textArea');

	// deleting the note
	delButton.addEventListener('click', () => {
		note.remove();
		updateLocalStorageData();
	});

	//toggle using edit button
	textArea.innerHTML = text;
	mainDiv.innerHTML = text;

	editButton.addEventListener('click', () => {
		mainDiv.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});
	textArea.addEventListener('change', event => {
		const value = event.target.value;
		// console.log(typeof value);
		mainDiv.innerHTML = value;

		updateLocalStorageData();
	});

	document.body.appendChild(note);
};

const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if (notes) {
	notes.forEach(text => addNewNote(text));
}

addButton.addEventListener('click', () => addNewNote());
