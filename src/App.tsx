import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Header from "./Component/Header/Header";
import Books from "./Component/Books/Books";
import img from "./img/book2.jpg"
import Book from "./Component/Book/Book";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Books/>*/}
        <Book img_book={img}/>
    </div>
  );
}

export default App;
