import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';

//引入组件
import Login from './components/login/Login.js';
import RelLogic from './containers/reg/RegLogic.js';

//引入css
import '../node_modules/antd/dist/antd.css';
import './css/my-css.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/rel" component={RelLogic} />
                        <Redirect path="" to="/login"/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
