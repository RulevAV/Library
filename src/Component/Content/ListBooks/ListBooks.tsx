import React from "react";
import img1 from "../../../img/book1.jpg";
import img2 from "../../../img/book2.jpg";
import img3 from "../../../img/book3.jpg";
import CardBook from "./Card/Card";
const ListBooks = () => {


    let mass = [];
    for (let i = 0; i< 50; i++)
    {
        let img="s";
        let n = i%3;
        switch (n){
            case 0:
                img = img1;
                break ;
            case 1:
                img = img2;
                break ;
            case 2:
                img = img3;
                break ;
        }
        let component = <CardBook key={i} img_book={img}
                                   title={"название книги"}
                                   auctor={"Автор"}
                                   annotation={"Some quick example text to build on the card title and make up the bulk of\n" +
                                   "                the card's content."}/>
        mass.push(component);

    }

    return <div className={"container-fluid text-center"}>
        {mass}
    </div>
}
export default ListBooks