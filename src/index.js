import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import CV from "./CV"
import Projects from "./Projects"
import Contact from "./Contact"

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Hello}></Route>
                <Route exact path='/cv' component={CV}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/contact' component={Contact}></Route>
            </Switch>
            <Footer />
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>
), document.getElementById("app"));