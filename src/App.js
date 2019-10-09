import React, { Component } from 'react';
import routes from './routes/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div className="App">
                        {this.showContent(routes)}
                    </div>
                </Router>
            </React.Fragment>
        );
    }
    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((el, index) => {
                return (<Route
                    key={index}
                    path={el.path}
                    exact={el.exact}
                    component={el.main}
                />
                );
            });
        }
        return <Switch>{result} </Switch>;
    }
}

export default App;
