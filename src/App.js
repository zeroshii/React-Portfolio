import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { HashRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route exact path = '/index'><About /></Route>
                <Route path = '/contact'><Contact /></Route>
                <Route path = '/portfolio'><Portfolio /></Route>
            </Switch>
            <Footer />
        </HashRouter>
    )
}

export default App;
