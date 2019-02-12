import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

import HomePage from '../components/HomePage';
import Add from '../components/Add';
import About from '../components/About';
import NotFound404 from '../components/NotFound404';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Switch>
                            <Route path="/" component={HomePage} exact={true} />
                            <Route path="/add/:item" component={Add} />
                            <Route path="/about" component={About} />
                            <Route component={NotFound404} />
                        </Switch>                    
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>             
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;

