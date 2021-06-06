import React, {useEffect} from "react";
import Performance from "./Performance/Performance";
import Posts from "./Posts/Posts";
import { withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router";
import {connect} from "react-redux";
import {GetBookSagaAction} from "../../redux/Book-reducer";



type PathParamsType = {
    genre:string,
    IdBook: string,
    AuthorBookTitle:string
}
type IWithBook = RouteComponentProps<PathParamsType> & {
    GetBookSaga:(idBook:string)=>void
    img_book:string|null
    title:string
    author:string,
    annotation:string
    Genre:string
    date:string
}

const Book : React.FC<IWithBook> = ({match,date,Genre,annotation,author,GetBookSaga,img_book,title})=>{
    useEffect(()=>{
        GetBookSaga(match.params.IdBook);
    },[])
    return <>
        <Performance img_book={img_book}
                     title={title}
                     author={author}
                     annotation={annotation}
                     Genre={Genre}
                     date={date}
        />
        <Posts/>
        </>
}
let withBook =  withRouter(Book);

let mapStateToProps = (state:any) =>{
    console.log(state.BookReducer);
        return {
            img_book:state.BookReducer.img_book,
            title:state.BookReducer.title,
            author:state.BookReducer.author,
            annotation:state.BookReducer.annotation,
            Genre:state.BookReducer.Genre,
            date:state.BookReducer.date,
        }
};
let mapDispatchToProps = (dispatch:any)=>{
    return{
        GetBookSaga: (idBook:string) =>{
            dispatch(GetBookSagaAction(idBook));
        }
    };
};
let withBook2 = connect(mapStateToProps,mapDispatchToProps)(withBook)


export default withBook2;
