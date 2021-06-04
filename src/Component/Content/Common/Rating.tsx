import like from "../../../img/like.png";
import dislike from "../../../img/dislike.png";
import React from "react";
import s from "./Rating.module.css";
const Rating  = ()=>{
    return   <div className={"container-fluid " + s.Rating}>
        <input type="image" alt="image 1"
               className={""}
               src={like}
        />
        <p className={""}><span>123</span>/<span>123</span></p>
        <input type="image" alt="image 1"
               className={""}
               src={dislike}
        />
        <h4  className={""}>1235</h4>
    </div>
}

export default Rating;