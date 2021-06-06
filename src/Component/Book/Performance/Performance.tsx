import img from "../../../img/nullBook.jpg";
import s from "../Book.module.scss";
import Ration from "../../Common/Ration/Rating";
import React from "react";
/*
* owner*/
const Performance:React.FC<any> = (props) =>{
    let red;
    if(props.User) red = props.User.id===props.owner;
    else red = false;

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
            <h4 className={"card-title"}>{!red ? props.title
                : <input type="text" onChange={()=>{}} value={props.title}/>  }</h4>
            <div>год издания:  {!red ? props.date: <input type="text" onChange={()=>{}} value={props.date}/>}</div>
            <div>жанр: {!red ? props.Genre: <input type="text" onChange={()=>{}} value={props.Genre}/> }</div>{/*Genre*/}
            <div className={"text"}>
                {!red ?<p className={"card-text text-secondary"}>{props.annotation}</p> : <textarea onChange={()=>{}} className="container-fluid d-inline" value={props.annotation}/>}

            </div>

            {!red ? <h6 className={"card-text text-right"}>{props.author}</h6> : <div className={"card-text text-right"}><input onChange={()=>{}} type="text" value={props.author} /></div>}

        </div>
    </div>
}
export default Performance;
