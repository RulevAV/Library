import {IBook} from "../interfaces";

export let GET_PAGES_BOOK_SAGA = "GET_PAGES_BOOK_SAGA";
let GET_BOOK = "GET_BOOK";
const initialState ={
    id:0,
    rating:0,
    img_book:null,
    title:"",
    author:"",
    Genre: "",
    annotation:"",
    date:""
}
export const BookReducer = (state :IBook =initialState, action :any) => {
    switch (action.type) {
        case GET_BOOK:
            return action.Book;

        default: return state;
    }
}
export let GetBookAction=(Book:IBook)=>{
    return {
        type:GET_BOOK,
        Book
    }
}

export let GetBookSagaAction=(idBook:string)=>{
    return {
        type:GET_PAGES_BOOK_SAGA,
        idBook
    }
}


export default BookReducer;

