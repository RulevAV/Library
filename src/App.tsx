import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Header from "./Component/Header/Header";
import {Route} from "react-router-dom";
import WallBooks from "./Component/WallBooks/WallBooks";
import Book from "./Component/Book/Book";
import ContainerLogin from "./Component/Login/ContainerLogin";


function App() {
  return (
    <div className="App">
      <Header/>
        <Route render={()=><WallBooks/>} exact path="/"/>
        <Route render={()=><Book/>} exact path="/:genre/:AuthorBookTitle/:IdBook"/>
        <Route render={()=><div className={"d-flex justify-content-center"}>
            <ContainerLogin/>
        </div>}exact path="/Login"/>
    </div>
  );
}

export default App;
