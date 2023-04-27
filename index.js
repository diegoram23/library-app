const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
const form = document.getElementById('form')
const books = document.getElementById('books')

let myLibrary = [
    book1 = {
        title: 'the day we met',
        author: 'michael simmons',
        pages: 230,
        read: 'yes'
    },
    book2 = {
        title: 'the red cat',
        author: 'Jefferey Bezos',
        pages: 145,
        read: 'no'
    }
]

function getBooksHtml() {
    let booksHtml = ''
    myLibrary.forEach(book => {
        console.log(book);
        booksHtml += `
        <article>
        <h3 id="book-title">Title: ${book.title}</h3>
        <strong id="book-author">Author: ${book.author}</strong>
        <p>Number of pages: ${book.pages}</p>
        <p>Read? ${book.read}</p>
        <button id='remove-btn' data-remove='${book.title}'>Remove book</button>
    </article>
    `

    })
  

    books.innerHTML = booksHtml
}

document.addEventListener('click', (e) => {
    if (e.target.dataset.remove) {
        removeBook(e.target.dataset.remove)
    }
})

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary()
    getBooksHtml()
    console.log(myLibrary)

})

function removeBook(bookId) {
myLibrary = myLibrary.filter(book => bookId !== book.title)
getBooksHtml()
}

console.log(myLibrary);
getBooksHtml()



