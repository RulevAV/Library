import React, {useEffect} from "react";
import {connect} from "react-redux";
import s from "./Pagination.module.scss"
import {
    GetBooksSagaAction,
    SetPaginationBookListAction
} from "../../../../redux/HomePage-reducer";

type Props = {
    GetBooks: (Sort:number) => void,
    SetPaginationBookList: (currentPage:number) => void,
    currentPage: number,
    pageSize: number,
    ListBookCount: number
    Sort:number
}
let Generator = (currentPage: number, pageSize: number, ListBookCount: number,SetPaginationBookList: (currentPage:number) => void) => {
    let top = Math.floor(pageSize / 2);
    let CountPages = Math.ceil(ListBookCount/pageSize);
    let start = currentPage - top;
    let end = start + pageSize;
    if (pageSize >= CountPages) {
       /* console.log("я тут")*/
        start = 1;
        end = CountPages+1;
    } else if (start >= 1 && end <= CountPages) {
       /* console.log("Все хорошо");*/
    } else if (start < 1 && end <= CountPages) {
        start = 1;
        end = 1 + pageSize;
       /* console.log("Все плохо start<1");*/
    } else if (start >= 1 && end > CountPages) {
        end = CountPages + 1;
        start = end - pageSize;
/*        console.log("Все плохо end>ListBookCount");*/
    }
    let prev = currentPage ===1 ? 1:currentPage-1;
    let next = currentPage === CountPages? currentPage: currentPage+1;

    let mass = [];
    mass.push(<li key={0} className="page-item" onClick={()=>{
        SetPaginationBookList(prev);
    }}>
              <span className={"page-link "+ s.item} aria-label="Next">
                <span aria-hidden="true">&laquo;</span>
            </span>
    </li>)

    for (let i = start; i < end; i++) {
        mass.push(<li  key={i} onClick={()=>{
            SetPaginationBookList(i);
        }} className={i !== currentPage ? "page-item ":"page-item active"}><span className={"page-link "+ s.item}>{i}</span></li>)
    }
    mass.push( <li key={CountPages+1}  className="page-item" onClick={()=>{
        SetPaginationBookList(next);
    }}>
            <span className={"page-link "+ s.item} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </span>
    </li>)
    return mass;
}


const Pagination: React.FC<Props> = ({GetBooks, currentPage, pageSize, ListBookCount,SetPaginationBookList,Sort}) => {

    useEffect(() => {
        GetBooks(Sort);
    },[ListBookCount, currentPage, Sort, GetBooks])
    let buts = Generator(currentPage, pageSize, ListBookCount,SetPaginationBookList);
    return <ul className="pagination justify-content-center">
        {buts}
    </ul>
}


let mapStateToProps = (state: any) => {
    return {
        currentPage: state.HomePageReducer.currentPage,
        pageSize: state.HomePageReducer.pageSize,
        ListBookCount: state.HomePageReducer.ListBookCount,
        Sort : state.HomePageReducer.Sort,
    }
};
let mapDispatchToProps = (dispatch: any) => {
    return {
        GetBooks: (Sort:number) => {
            dispatch(GetBooksSagaAction(Sort));
        },
        SetPaginationBookList: (currentPage:number) => {
            dispatch(SetPaginationBookListAction(currentPage));
        },
    }
};
let WithPagination = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export default WithPagination;