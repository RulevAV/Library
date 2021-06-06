import React from "react";
import Dropright from "./Dropright";
import {connect} from "react-redux";
import {
    ChangerSelectionAuthorAction,
    ChangerSelectionTitleAction, GetBooksSagaAction,
    SortBooksAction
} from "../../../../../redux/HomePage-reducer";
import {Button} from "react-bootstrap";
interface ISort {
    SortBooksSaga: (sort:number)=>void,
    ChangerSelectionAuthor: (sort:string)=>void,
    ChangerSelectionTitle: (sort:string)=>void,
    GetBooks: (sort:number)=>void,
    SortAuthor:string,
    SortTitle:string,
    Sort:number
}

const Navigation:React.FC<ISort>= ({SortBooksSaga,ChangerSelectionAuthor,SortAuthor,SortTitle,ChangerSelectionTitle,GetBooks,Sort}) =>{

    return <div className={"container-fluid m-2"}>
            <div className={"row"}>
                <div className={"col text-left"}>
                    <Dropright name={"Сортировка"} SortBooksSaga={SortBooksSaga}/>
                </div>
                <div className={"col text-right"}>
                    <div><p className={"d-inline"}>Поиск </p></div>
                    <div><input onChange={e=>ChangerSelectionAuthor(e.target.value)} value={SortAuthor} placeholder={"по автору"}/></div>
                    <div><input onChange={e=>ChangerSelectionTitle(e.target.value)} value={SortTitle} placeholder={"по названию"}/></div>
                    <Button variant="success" onClick={()=>{GetBooks(Sort)}}>Найти</Button>
                </div>
            </div>
        </div>

}
let mapStateToProps = (state: any) => {
    return {
        SortAuthor:state.HomePageReducer.SortAuthor,
        SortTitle:state.HomePageReducer.SortTitle,
        Sort : state.HomePageReducer.Sort,
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        SortBooksSaga :(sort:number) =>{
            dispatch(SortBooksAction(sort));
        },
        ChangerSelectionAuthor:(SortAuthor:string)=>{
            dispatch(ChangerSelectionAuthorAction(SortAuthor))
        },
        ChangerSelectionTitle:(SortTitle:string)=>{
            dispatch(ChangerSelectionTitleAction(SortTitle))
        },
        GetBooks: (Sort:number) => {
            dispatch(GetBooksSagaAction(Sort));
        },

    }
};
let WithNavigation= connect(mapStateToProps, mapDispatchToProps)(Navigation);
export default WithNavigation;