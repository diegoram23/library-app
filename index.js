const books = document.getElementById('books')
const form = document.getElementById('form')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const isRead = document.getElementById('isRead')
const deleteBtn = document.getElementById('delete-btn')



let myLibrary = [

    {
        title: 'The Hobbit',
        author: 'J.K Rowling',
        pages: '23',
        isRead: false,
    },

    {
        title: 'Spider-Man',
        author: 'Jeffrey Epstein',
        pages: '185',
        isRead: true,
    }

]

document.addEventListener('click', (e) => {
    if (e.target.dataset.remove) {
        removeBook(e.target.dataset.remove)
    }

    if (e.target.dataset.update) {
        toggleRead(e.target.dataset.update)
    }
})


class Book {
    constructor(title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}


Book.prototype.toggleRead = function () {
    return this.isRead = !this.isRead
}

function toggleRead(i) {
    console.log(typeof myLibrary)
    console.log(i)
    console.log(myLibrary[i])
    myLibrary[i].toggleRead()
    getBooksHtml()
}

function addBook() {
    myLibrary.push(new Book(title.value, author.value, pages.value, isRead.value))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBook()
    getBooksHtml()
})

function removeBook(title) {
    myLibrary = myLibrary.filter(book => title !== book.title)
    getBooksHtml()
}

function getBooksHtml() {
    let booksHtml = ''
    myLibrary.forEach((book, index) => {
        booksHtml += `
        <article>
            <h2>${book.title}</h2>
            <p>By: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read? ${book.isRead}</p>
            <button data-remove='${book.title}'>Delete</button>
            <button data-update='${index}' >Update Read</button>
        </article>
        `
    })
    books.innerHTML = booksHtml
}

getBooksHtml()