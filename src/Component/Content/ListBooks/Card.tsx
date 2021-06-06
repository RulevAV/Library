import React from "react";
import {Card,Button} from "react-bootstrap";
const CardBook = () => {
    return <Card border={"success"} style={{ width: '12rem' }} >
            <Card.Img variant="top" src="https://cdn.recyclemag.ru/main/4/47b7ae0fee74aa3e935ecafd69b089de.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
}
export default CardBook