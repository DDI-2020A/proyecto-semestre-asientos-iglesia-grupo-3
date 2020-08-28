import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import Navigation from "./Navigation";
import Header from "./Header";

function App() {
    return (

        <Router>
            <div>
                <Header />

                <Navigation />
            </div>
        </Router>

    );
}

export default App;
