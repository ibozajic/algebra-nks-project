import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Add from '../components/Add';
import About from '../components/About';
import NotFound404 from '../components/NotFound404';
import FavoritesPage from '../components/FavoritesPage';
import CartPage from '../components/CartPage';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import { Provider } from 'react-redux';
import store from '../components/store';

const AppRouter = () => (
    <Provider store={store}> 
        <BrowserRouter>
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Col sm={9}>
                            <Switch>
                                <Route path="/" component={HomePage} exact={true} />
                                <Route path="/add/:item" component={Add} />
                                <Route path="/about" component={About} />
                                <Route path="/favorites" component={FavoritesPage} />
                                <Route path="/cart" component={CartPage} />
                                <Route component={NotFound404} />
                            </Switch>                     
                        </Col>
                        <Col sm={3}> 
                            <Sidebar />                  
                        </Col>
                    </Row>
                </Container>             
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
)

export default AppRouter;

