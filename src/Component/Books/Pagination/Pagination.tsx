import React from "react";
import Dropright from "./Dropright";

const Pagination = () =>{
    return    <nav aria-label="Page navigation example">
        <div className={"container-fluid m-2"}>
            <div className={"row"}>
                <div className={"col text-left"}>
                    <div><p className={"d-inline"}>Сортировка </p></div>
                    <div>
                        <Dropright name={"По автору"}/>
                    </div>
                    <div>
                        <Dropright name={"По названию"}/>
                    </div>
                    <div>
                        <Dropright name={"По рейтингу"}/>
                    </div>


                </div>
                <div className={"col text-right"}>
                    <div><p className={"d-inline"}>Поиск </p></div>
                    <div><input placeholder={"по автору"}/></div>
                    <div><input placeholder={"по названию"}/></div>
                </div>
            </div>
        </div>
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="/">1</a></li>
            <li className="page-item active"><a className="page-link" href="/">2</a></li>
            <li className="page-item"><a className="page-link" href="/">3</a></li>
            <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>

        </ul>


    </nav>
}

export default Pagination;