import React from "react";
import user from "../../../../img/user.png";
import s from "./Post.module.scss"

const Post:React.FC<any> = (props) =>{

    let order =  props.MyPost ? "order-last" : "order-first";
    let order2 =  props.MyPost ? "text-right" : "";
    return <div className={"container-fluid " + s.Post}>
        <div className={"row"}>
            <div className={"col-1 m-0 p-0 " + order}>
                <input type="image" alt="image 1"
                       className={s.img} src={user}
                />
            </div>
            <div className={"col-11 m-0 p-0"}>
                <div className={order2}>
                    <div className={"font-weight-bold"}>Наталия Якушкина</div>
                    <div className={"font-weight-bold"}>22 апреля</div>
                    <p>Каждая книга Кейн вызывает восторг, автор изумительно пишет, герои живые настоящие, всегда есть интрига, динамика сюжета, и вот вуаля, новая книга, жду с нетерпением</p>

                </div>

                 </div>
        </div>
    </div>

}

export default Post;