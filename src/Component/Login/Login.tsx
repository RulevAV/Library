import React, {useState} from "react";
import {IAuthorization} from "../../interfaces";


const Login : React.FC<IAuthorization> = ({Authorization,errorMessage}) => {

    let [stateLogin,setLogin] = useState("");
    let [statePassword,setPasword] = useState("");
    return (
        <form className={"border border-success rounded m-2 p-2 "}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Логин</label>
                <input value={stateLogin}  onChange={e =>setLogin(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Логин"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Пароль</label>
                <input value={statePassword} onChange={e =>setPasword(e.target.value)} type="password" className="form-control" name={"password"} placeholder="Пароль" autoComplete="on"/>
            </div>
            <div className="form-check">
                <input  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
            </div>
            <button onClick={()=>{
                Authorization(stateLogin,statePassword);
            }} type="button" className="btn btn-primary">Войти</button>
            {errorMessage ? <div className={"text-danger"}>{errorMessage}</div>:null}
            {/*<div>Неверный логин или пароль</div>*/}
        </form>
    );
}

export default Login;