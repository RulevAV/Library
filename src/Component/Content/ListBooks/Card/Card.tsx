import React from "react";
import "./Card.css"
import like from "../../../../img/like.png"
import dislike from "../../../../img/dislike.png"
interface  TodoFormProps {
    img_book : any,
    title: string,
    annotation:string,
    auctor:string
}

const CardBook2 : React.FC<TodoFormProps> = (props) => {
    return  <div className={"card text-center"}>
        <div className={"overflow"}>
            <input type="image" alt="image 1"
                   className={"card-img-top imgSize"}
                   src={props.img_book}
            />
        </div>
        <div className={"card-body text-dark"}>
            <h4 className={"card-title"}> {props.title}</h4>
            <div className={"text"}>
                <p className={"card-text text-secondary"}>{props.annotation}</p>
            </div>




            <h6 className={"card-text text-right"}>{props.auctor}</h6>

            <a href={"/"} className={"btn btn-outline-success"}>Go Anywhere</a>
        </div>
    </div>
}
export default CardBook2