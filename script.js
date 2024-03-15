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

const display = document.querySelector("#display");
const tableHeading = display.querySelector("thead");
let removeBookButtons = display.querySelectorAll(".remove-book");

function displayLibrary() {
	while (tableHeading.nextSibling) {
		const tableRow = tableHeading.nextSibling;
		display.removeChild(tableRow);
	}

	myLibrary.forEach((book, i) => {
		const entry = document.createElement("tr");

		for (attr in book) {
			if (typeof book[attr] !== "function") {
				const details = document.createElement("td");
				details.textContent = book[attr];

				entry.appendChild(details);
			}
		}

		const removeBook = document.createElement("button");

		removeBook.textContent = "Remove";
		removeBook.value = i;
		removeBook.classList.add("remove-book");

		entry.appendChild(removeBook);

		display.appendChild(entry);
	});

	removeBookButtons = display.querySelectorAll(".remove-book");
	removeBookButtons.forEach((removeButton) => {
		removeButton.addEventListener("click", (e) => {
			console.log("cock");
			myLibrary.splice(e.target.value, 1);

			displayLibrary();
		});
	});
}

const showDialog = document.querySelector("#show-dialog");
const modal = document.querySelector("#show-dialog + dialog");

const cancelButton = modal.querySelector("#cancel");
const submitButton = modal.querySelector("#submit");

showDialog.addEventListener("click", () => {
	modal.showModal();
});

cancelButton.addEventListener("click", () => {
	modal.close();
});

submitButton.addEventListener("click", (e) => {
	e.preventDefault();

	const bookName = modal.querySelector("#book-name").value;
	const bookAuthor = modal.querySelector("#book-author").value;
	const bookPages = modal.querySelector("#book-pages").value;
	const bookRead = modal.querySelector("#book-read") === "True" ? true : false;

	myLibrary.push(new Book(bookName, bookAuthor, bookPages, bookRead));

	displayLibrary();

	modal.close();
});
