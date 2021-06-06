import React, {useState} from "react";
import {connect} from "react-redux";
import { AuthUserSagaAction} from "../../redux/Auth-reducer";
import {IAuthorization} from "../../interfaces";
import {Redirect} from "react-router";
import Login from "./Login";


const HOCLogin : React.FC<IAuthorization> = ({User,Authorization}) => {
    if(User)
        return <Redirect to={""}/>
    return <Login Authorization={Authorization} User={User}/> ;
}
let mapStateToProps = (state:any) =>{
    return {
        User:state.AuthReducer.User
    }
};
let mapDispatchToProps = (dispatch:any)=>{

    return{
        Authorization: (login:string, password:string) =>{
            dispatch(AuthUserSagaAction(login, password));
        }
    };
};
let ContainerLogin = connect(mapStateToProps,mapDispatchToProps)(HOCLogin)

export default ContainerLogin;