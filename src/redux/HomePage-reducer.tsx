import {IBook, IGetListBook} from "../interfaces";

export let GET_BOOKS_SAGA = 'GET_BOOKS_SAGA';
let SET_PAGINATION_BOOK_LIST = "SET_PAGINATION_BOOK_LIST";
export let SORT_BOOKS_SAGA = "SORT_BOOKS_SAGA";
let GET_BOOKS = 'GET_BOOKS';
let CHANGR_SELECTION_Author = "CHANGR_SELECTION_Author";
let CHANGR_SELECTION_Title = "CHANGR_SELECTION_Title";
let initialState = {
    ListBook : [],
    pageSize:5,
    currentPage:1,
    ListBookCount:0,
    Sort : 0,
    SortTitle:"",
    SortAuthor:"",
};

interface ListBooksState {
    ListBook : Array<IBook>,
    pageSize:number,
    currentPage:number,
    ListBookCount:number,
    Sort:number
}


export const HomePageReducer = (state :ListBooksState =initialState, action :any) => {
    switch (action.type) {
        case GET_BOOKS:{
            return {
                ...state,
                ListBook : action.data.PartListBook,
                ListBookCount:action.data.CountBooks,
            }
        }
        case SET_PAGINATION_BOOK_LIST:{
            return {
                ...state,
                currentPage:action.currentPage
            }
        }
        case SORT_BOOKS_SAGA:
        return {
            ...state,
            Sort:action.Sort
        }
        case CHANGR_SELECTION_Author:{
            return {
                ...state,
                SortAuthor : action.SortAuthor,
            }
        }
        case CHANGR_SELECTION_Title:{
            return {
                ...state,
                SortTitle : action.SortTitle,
            }
        }
        default: return state;
    }
}


export let ChangerSelectionAuthorAction = (SortAuthor:string)=>{
    return {
        type:CHANGR_SELECTION_Author,
        SortAuthor
    }
}
export let ChangerSelectionTitleAction = (SortTitle:string)=>{
    return {
        type:CHANGR_SELECTION_Title,
        SortTitle
    }
}
export let GetBooksSagaAction = (Sort:number)=>{
    return {
        type:GET_BOOKS_SAGA,
        Sort
    }
}
export let SortBooksAction = (Sort:number)=>{
    return {
        type:SORT_BOOKS_SAGA,
        Sort
    }
}
export let GetBooksAction = (data:IGetListBook)=>{
    return {
        type:GET_BOOKS,
        data
    }
}
export let SetPaginationBookListAction = (currentPage:number)=>{
    return {
        type:SET_PAGINATION_BOOK_LIST,
        currentPage
    }
}
export default HomePageReducer;

