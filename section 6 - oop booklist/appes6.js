class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBooktoList(book){
    const list = document.getElementById('book-list');
    //Create tr element
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
    //Append to table
    list.appendChild(row);
  }
  
  showAlert(message, className){
    //Create a div
  const div = document.createElement('div');
  //Add class to div
  div.className = `alert ${className}`;
  //Add text
  div.appendChild(document.createTextNode(message));
  //Get Parent
  const container = document.querySelector('.container');
  // Get Form
  const form = document.querySelector('#book-form');
  //insert Before form
  container.insertBefore(div, form);

  //Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
  }

  deleteBook(target){
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
      //Show message
      this.showAlert('Book Removed!', 'success');
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//Local Storage Class
class Store { 
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBook(){
    const books = Store.getBooks();
    books.forEach(function(book){
      const ui = new UI();
      //Add book to list
      ui.addBooktoList(book);
    });
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index){
      //remove book if the isbn matches
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    }); 
    localStorage.setItem('books', JSON.stringify(books));  
  }
}

//DOM on load call
document.addEventListener('DOMContentLoaded', Store.displayBook());

//Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit', function(e){
  //Get Form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  
  // Instantiate Book
  const book = new Book(title, author, isbn);

  //Instantiate UI 
  const ui = new UI();
  
  //Validate
  if(title === '' || author === '' || isbn ==='') {
    ui.showAlert('Please fill in all the fields', 'error');
  } else {
    //Add book to list
    ui.addBooktoList(book);

    //Add book to local storage
     Store.addBook(book);
    //Display success alert
    ui.showAlert('Successfully added!', 'success');

    //Clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  
  //Instantiate a book
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);

  //Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  e.preventDefault();
});
