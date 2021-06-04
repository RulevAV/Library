import React from "react";
import Like from "./Like";
import DisLike from "./DisLike";
import s from "./Rating.module.scss";

const Ration = ()=>{
    return <div className={"container-fluid "}>
        <div className={s.Rating}>
            <Like width={"1rem"} className={s.svgIcon +" "+ s.svgLike}/>
            <p className={"text-s"}><span className={s.like}>123</span>/<span className={s.dislike}>123</span></p>
            <DisLike width={"1rem"} className={s.svgIcon +" "+ s.svgDisLike}/>
            <h4 className={""}>1235</h4>
        </div>
    </div>
}

export default Ration;