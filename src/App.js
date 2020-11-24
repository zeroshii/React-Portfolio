import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path = '/index'><About /></Route>
                <Route path = '/contact'><Contact /></Route>
                <Route path = '/portfolio'><Portfolio /></Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;
