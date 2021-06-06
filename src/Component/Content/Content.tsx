import React from "react";
import CardBook2 from "./ListBooks/Card/Card2";
import img1 from "../../img/book1.jpg";
import img2 from "../../img/book2.jpg";
import img3 from "../../img/book3.jpg";

function Content() {//d-flex justify-content-center

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
       let component = <CardBook2 key={i} imgsrc={img}
                   title={"название книги"}
                   auctor={"Автор"}
                   annotation={"Some quick example text to build on the card title and make up the bulk of\n" +
                   "                the card's content."}/>
        mass.push(component);

    }

    return  <div className={"container-fluid text-center"}>
        {mass}


        </div>

}

export default Content