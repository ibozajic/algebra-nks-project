import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

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
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/add/:item" component={Add} />
                <Route path="/about" component={About} />
                <Route component={NotFound404} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;

