import Ration from "../Common/Ration/Rating";
import React from "react";

const Book : React.FC<any> = (props)=>{
    return <div>
        <div className={"card text-center"}>
            <div className={"overflow"}>
                <input type="image" alt="image 1"
                       className={"card-img-top imgSize"}
                       src={props.img_book}
                />
            </div>
            <div className={"card-body text-dark"}>
                <h4 className={"card-title"}> {'props.title'}</h4>
                <div className={"text"}>
                    <p className={"card-text text-secondary"}>{'props.annotation'}</p>
                </div>


                <Ration/>

                <h6 className={"card-text text-right"}>{'props.auctor'}</h6>

                <a href={"/"} className={"btn btn-outline-success"}>Go Anywhere</a>
            </div>
        </div>
    </div>
}

export default Book;