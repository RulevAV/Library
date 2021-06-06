import {Button, Form, Nav, Navbar} from "react-bootstrap";
import IconBook from "../../img/AddressBook.png";
import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss";
import {AuthUserAction, LogoutUserAction} from "../../redux/Auth-reducer";
import {connect} from "react-redux";
import {IAuthentication, IUser} from "../../interfaces";




const  Header:React.FC<IAuthentication> = ({AuthUser,User,LogoutUser}) => {

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('User')|| '[]') as IUser;
        if(!Array.isArray(data)) {
            AuthUser(data);
        }
    },[])

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <NavLink to={'/'} className={s.Brand}>
                <img
                    alt=""
                    src={IconBook}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Пупер-Библиотека
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
                <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                    <span className="navbar-text text-white mr-4">
                      {User ? User?.Login : "Не авторизованный пользователь"!}
                    </span>
                    <NavLink to={'/Login'} className={s.Brand}>
                        {!User ? <Button variant="outline-success">Войти</Button>
                            : <Button onClick={()=>{
                                LogoutUser();
                            }} variant="outline-success">Выйти</Button>}
                    </NavLink>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

let mapStateToProps = (state:any) =>{
    return {
        User:state.AuthReducer.User
    }
};
let mapDispatchToProps = (dispatch:any)=>{

    return{
        AuthUser: (User:IUser) =>{
            dispatch(AuthUserAction(User));
        },
        LogoutUser:()=>{
            dispatch(LogoutUserAction());
        }
    };
};
let ContainerHeader = connect(mapStateToProps,mapDispatchToProps)(Header)

export default ContainerHeader;
