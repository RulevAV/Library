import React from "react";
import Performance from "./Performance/Performance";
import Posts from "./Posts/Posts";
const Book : React.FC<any> = (props)=>{
    return <>
        <Performance img_book={null}
                     title={"название книги"}
                     auctor={"Автор"}
                     annotation={"Some quick example text to build on the card title and make up the bulk of\n" +
                     "                the card's content."}/>
        <Posts/>
        </>
}

export default Book;