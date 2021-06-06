import React from "react";
import CardBook from "./Card";
import {CardColumns,CardDeck,CardGroup} from "react-bootstrap";
const ListBooks = () => {
    return <CardColumns className={"container-fluid"}>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>
        <CardBook/>

    </CardColumns>
}
export default ListBooks