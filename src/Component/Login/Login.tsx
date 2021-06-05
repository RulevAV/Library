import React from "react";
function Login() {
    return (
        <form className={"border border-success rounded m-2 p-2 "}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Логин</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Логин"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль"/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
            </div>
            <button type="submit" className="btn btn-primary">Войти</button>
        </form>
    );
}

export default Login