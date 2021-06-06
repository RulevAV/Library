import React from "react";
import "./Card.css"
import {NavLink} from "react-router-dom";
import {IBook} from "../../../../interfaces";

const CardBook : React.FC<IBook> = ({Genre, author,id,img_book,title,annotation,rating}) => {
    return  <div className={"card text-center"}>
        <NavLink  to={`${Genre}/${author}/${id}`} className={"Link"}>
        <div className={"overflow"}>
                <input type="image" alt="image 1"
                       className={"card-img-top imgSize"}
                       src={img_book ?? ""}
                />
        </div>
        <div className={"card-body text-dark"}>
            <h4 className={"card-title"}> {title}</h4>
            <div className={"text"}>
                <p className={"card-text text-secondary"}>{annotation}</p>
            </div>
            <h6 className={"card-text text-right"}>{`Рейтинг ${rating}`}</h6>
            <h6 className={"card-text text-right"}>{author}</h6>
        </div>
        </NavLink>
    </div>
}
export default CardBook