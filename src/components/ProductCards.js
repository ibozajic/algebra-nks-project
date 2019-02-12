import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class ProductCards extends Component {   
    render() {
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>                
                <Button variant="primary"><i class="fas fa-star"></i></Button>
                &nbsp;
                <Button variant="primary"><i class="fas fa-info-circle"></i></Button>
                &nbsp;
                <Button variant="primary"><i class="fas fa-plus-circle"></i></Button>                               
            </Card.Body>
        </Card>
        )
    }
}


export default ProductCards;