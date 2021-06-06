import {select,takeEvery,put,call} from "redux-saga/effects"
import {GET_BOOKS_SAGA, GetBooksAction, SetPaginationBookListAction} from "../redux/HomePage-reducer";
import {GetListBook, GetPagesBook, Login} from "./Emulator";
import {IBook, IGetListBook, IUser} from "../interfaces";
import {GET_PAGES_BOOK_SAGA, GetBookAction} from "../redux/Book-reducer";
import {AUTH_USER_SAGA, AuthUserAction} from "../redux/Auth-reducer";

function users(currentPage:number,pageSize:number,sort:number,SortAuthor:string,SortTitle:string){
    return GetListBook(currentPage, pageSize,sort,SortAuthor,SortTitle);
}
//GET_BOOKS_SAGA
function* workerLoudBook(action:any){
    const {HomePageReducer}  = yield select();
    const data:IGetListBook = yield call(users,HomePageReducer.currentPage,HomePageReducer.pageSize,action.Sort,HomePageReducer.SortAuthor,HomePageReducer.SortTitle);

    if(HomePageReducer.ListBookCount!==data.CountBooks)
        yield put(SetPaginationBookListAction(1));
    yield put(GetBooksAction(data));
}

export function* watchingLoadBooks(){
    yield takeEvery(GET_BOOKS_SAGA,workerLoudBook);
}

//GET_BOOK_SAGA
function* workerGetBook(action:any){
    const data:IBook = yield call(GetPagesBook,+action.idBook);

    yield put(GetBookAction(data));
}

export function* watchingGetBook(){
    yield takeEvery(GET_PAGES_BOOK_SAGA,workerGetBook);
}
//AUTH_USER_SAGA
function* workerAuthUser(action:any){
    const User:IUser = yield call(Login,action.login,action.password)
    localStorage.setItem("User", JSON.stringify(User));

    yield put(AuthUserAction(User));
}

export function* watchingAuthUser(){
    yield takeEvery(AUTH_USER_SAGA,workerAuthUser);
}


