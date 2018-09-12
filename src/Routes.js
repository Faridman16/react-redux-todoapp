import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// The Todo Container Component

import TodoContainer from './todos/containers/todoContainer'
import faridListContainer from './faridList/containers/FaridContainer';


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>

                {/* It's setup at the default index route */}

                <Route exact path="/" component={TodoContainer} />
                <Route exact path="/faridTodo" component={faridListContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }