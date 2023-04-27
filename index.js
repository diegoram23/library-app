const title = document.getElementById('title')
const author = document.getElementById('author')
const form = document.getElementById('form')
const books = document.getElementById('books')

let myLibrary = [
    book1 = {
        title: 'the day we met',
        author: 'michael simmons'
    },
    book2 = {
        title: 'the red cat',
        author: 'Jefferey Bezos'
    }
]

function getBooksHtml() {
    let booksHtml = ''
    myLibrary.forEach(book => {
        booksHtml += `
        <article>
        <h3 id="book-title">${book.title}</h3>
        <strong id="book-author">${book.author}</strong>
    </article>
    `
    })
    books.innerHTML = booksHtml
}


function Book(title, author) {
    this.title = title,
    this.author = author
}

function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary()
    getBooksHtml()
    console.log(myLibrary)

})

getBooksHtml()



