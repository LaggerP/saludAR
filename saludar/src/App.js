import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Landing from "./components/Landing";
import Reports from "./components/Pages/Reports/Reports";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/reportes" component={Reports} />
            </Switch>
        </div>
    );
}

export default App;
