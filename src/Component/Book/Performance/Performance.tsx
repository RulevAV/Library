import img from "../../../img/nullBook.jpg";
import s from "../Book.module.scss";
import Ration from "../../Common/Ration/Rating";
import React from "react";

const Performance:React.FC<any> = (props) =>{
    return <div className={"row m-1 p-1"}>
        <div className={"col-lg-6"}>
            <input type="image" alt="image 1"
                   className={s.img}
                   src={props.img_book || img}
            />
            <div className={"text-center"}>
                <Ration/>
            </div>
        </div>
        <div className={"col-lg-6"}>
            <h4 className={"card-title"}> {props.title}</h4>
            <div>{`год издания: ${props.date}  `}</div>
            <div>{`жанр: ${props.Genre}  `}</div>
            <div className={"text"}>
                <p className={"card-text text-secondary"}>{props.annotation}</p>
            </div>
            <h6 className={"card-text text-right"}>{props.author}</h6>
        </div>
    </div>
}
export default Performance;
