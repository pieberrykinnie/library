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

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());
