function book(title,author,noOfPages,readStatus){
    this.title = title,
    this.author = author,
    this.noOfPages = noOfPages,
    this.readStatus = readStatus
}
    book.prototype.info = function(){
        return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.readStatus}`
}
    book.prototype.readStatusChange = function(){
        if(this.readStatus == 'true'){
            this.readStatus = 'false';
        } else if(this.readStatus == 'false'){
            this.readStatus = 'true';
        }
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
        div.id = 'bookDiv';
        let titleDiv = document.createElement('div');
        let authorDiv = document.createElement('div');
        let pagesDiv = document.createElement('div');
        let readButton = document.createElement('button');
        let bookDivClose = document.createElement('span');

            bookDivClose.classList.add('bookDiv-close');
            bookDivClose.textContent = 'X';
            readButton.id = 'read'; 
            titleDiv.textContent = `${myLibrary[i].title}`;
            authorDiv.textContent = `${myLibrary[i].author}`;
            pagesDiv.textContent = `${myLibrary[i].noOfPages} pages`;
            function readButtonStatus(){
                if(myLibrary[i].readStatus == 'true'){
                    return 'Read'
                }else {return 'Not Read Yet'};
            }
            readButton.textContent =  readButtonStatus();
            
            div.appendChild(titleDiv);
            div.appendChild(authorDiv);
            div.appendChild(pagesDiv);
            div.appendChild(readButton);
            div.appendChild(bookDivClose);

        bookDisplay.appendChild(div);

        readButton.addEventListener('click', (e) => {
            let bookName = e.target.parentNode.firstChild.textContent;
             for(i=0; i<myLibrary.length; i++){
                if(bookName == myLibrary[i].title){
                    myLibrary[i].readStatusChange();
                }
             }
            if(readButton.textContent == 'Read'){
                readButton.textContent = 'Not Read Yet';
            } else if(readButton.textContent == 'Not Read Yet'){
                readButton.textContent = 'Read';
            }
        })

        bookDivClose.addEventListener('click', (e) => {
            let bookName = e.target.parentNode.firstChild.textContent;
             for(i=0; i<myLibrary.length; i++){
                if(bookName == myLibrary[i].title){
                    myLibrary.splice(i,1);
                }
             }
             clearDisplay();
             displayBook();
        })

        // div.addEventListener('mouseover', (e) => {
        //     const bookInfo = document.getElementById('book-info');
        //     // let bookInfoTitle = `${myLibrary[i].title}`;
        //     // let bookInfoAuthor = `${myLibrary[i].author}`;
        //     // let bookInfoPages = `${myLibrary[i].noOfPages} pages`;
        //         console.log(e.target.parentNode)
        //         // bookInfo.appendChild(bookInfoTitle);
        //         // bookInfo.appendChild(bookInfoAuthor);
        //         // bookInfo.appendChild(bookInfoPages);
        // })
    }
}


    let theHobbit = new book('The Hobbit', 'J.R.R Tolkein', '306', 'true');
    myLibrary.push(theHobbit);
    displayBook();

    