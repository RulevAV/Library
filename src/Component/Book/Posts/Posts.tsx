import React from "react";
import Post from "./Post/Post";

const Posts : React.FC<any> = (props)=>{
    return <div className={"container-fluid"}>
            <div className={"container-fluid bg-secondary"}>
                <h4 className={"m-0 p-0"}>Комментарии</h4>

            </div>
            <div className={"bg-info p-0 m-0"}>
                <Post MyPost={false}/>
                <Post MyPost={false}/>
                <Post MyPost={true}/>
                <Post MyPost={false}/>
                {/*
                <Post/>
                <Post/>
                <Post/>
                <Post/>*/}
            </div>
        </div>
}

export default Posts;