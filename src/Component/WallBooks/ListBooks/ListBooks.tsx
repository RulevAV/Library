import React from "react";
import CardBook from "./Card/Card";
import {connect} from "react-redux";
import {IBook} from "../../../interfaces";

type Props = {
    ListBook:Array<IBook>,

}

const ListBooks:React.FC<Props> = ({ListBook}) => {
    let mass = ListBook?.map((book)=>{
        return <CardBook key={book.id}
                         id={book.id}
                         img_book={book.img_book}
                         rating={book.rating}
                         title={book.title}
                         author={book.author}
                         annotation={book.annotation}
                         Genre = {book.Genre}
                         date = {book.date}
        />;
    });


    return <div className={"container-fluid text-center"}>
        {mass}
    </div>
}

let mapStateToProps = (state:any)=>{
    return {
        ListBook:state.HomePageReducer.ListBook,
    }
};
let mapDispatchToProps = (dispatch:any)=>{
    return{

    }
};

let WithListBooks = connect(mapStateToProps,mapDispatchToProps)(ListBooks);

export default WithListBooks