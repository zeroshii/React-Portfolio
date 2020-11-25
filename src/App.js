import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { HashRouter, Route, Switch} from "react-router-dom";
import './components/style.css';


function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div className = "Appbg">
            <Header />
            <Switch>
                {/* <Route exact path = '/index'><About /></Route> */}
                <Route exact path={["/index", "/"]}><About /></Route>
                <Route exact path = '/contact'><Contact /></Route>
                <Route exact path = '/portfolio'><Portfolio /></Route>
            </Switch>
            
            <Footer />
            </div>
        </HashRouter>
    )
}

export default App;
