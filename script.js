const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function () {
		return (
			`${title} by ${author}, ${pages}, ` +
			(read ? "already read" : "not read yet")
		);
	};
}

function addBookToLibrary() {
	const title = prompt("Title of the book:");
	const author = prompt("Author of the book:");
	const pages = parseInt(prompt("Page count of the book:"));
	const read = !(prompt("Whether the book's been read:") === "false");

	myLibrary.push(new Book(title, author, pages, read));
}
