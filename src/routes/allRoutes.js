import React from "react"
import {Router, Route, Switch, } from "react-router-dom";
import history from "../History";
import App from "../App";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        </Router>
    )
}

export default Routes;