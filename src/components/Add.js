import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Add = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Adding item [{props.match.params.item}]</h2>
        </div>
    )
}

export default Add;