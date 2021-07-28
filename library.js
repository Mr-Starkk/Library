function book(title,author,noOfPages,readStatus){
    this.title = title,
    this.author = author,
    this.noOfPages = noOfPages,
    this.readStatus = readStatus
}
book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.readStatus}`
}

let myLibrary = [];
addBookToLibrary();

function addBookToLibrary(){
    modalToggle();
    const addBookButton = document.getElementById('add-book');
    addBookButton.addEventListener('click', () => {
        const titleInput = document.getElementById('title-input');
        const authorInput = document.getElementById('author-input');
        const pagesInput = document.getElementById('pages-input');
        const readStatus = document.getElementById('read-status');
            console.log(titleInput.value, authorInput.value, pagesInput.value, readStatus.checked)
            let aBook = new book(`${titleInput.value}`,`${authorInput.value}`,`${pagesInput.value}`,`${readStatus.checked}`);
            myLibrary.push(aBook);
            clearDisplay();
            displayBook();
    })


}
function clearDisplay(){
    const bookDisplay = document.getElementById('book-display');
    bookDisplay.innerHTML = '';

}

function modalToggle(){
    const modalButton = document.getElementById('modal-button');
    const modalBg = document.querySelector('.modal-bg');
    const modalClose = document.querySelector('.modal-close');

        modalButton.addEventListener('click', () => {
            modalBg.classList.add('bg-active');
        });

        modalClose.addEventListener('click', () => {
            modalBg.classList.remove('bg-active');
        });
}

function displayBook(){
    //loop through the array and display each book on the page.
    for(i=0; i<myLibrary.length;i++){
        const bookDisplay = document.getElementById('book-display');
        const div = document.createElement('div');
        div.id = 'template';
        div.innerHTML = `${myLibrary[i].title} <br> By ${myLibrary[i].author} <br> ${myLibrary[i].noOfPages} pages <br> <button id='read'>Read</button>`;
        bookDisplay.appendChild(div);
    }
}


    let theHobbit = new book('The Hobbit', 'J.R.R Tolkein', '306', 'not read yet');
    myLibrary.push(theHobbit);
        myLibrary.forEach(element => console.table(element));
    displayBook();