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

function addBookToLibrary(){
    //do stuff here
}

function displayBook(){
    //loop through the array and display each 
    //book on the page.
}







        let Hobbit = new book('The Hobbit', 'J.R.R Tolkein', '306', 'not read yet');
        let theHobbit = new book('Hobbit', 'J.R.R Tolkein', '306', 'not read yet');
        myLibrary.push(theHobbit,Hobbit);
            myLibrary.forEach(element => console.table(element));