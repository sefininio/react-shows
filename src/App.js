    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
    import { Header } from './components';
    import {
        Home,
        ActorDetails,
        ShowDetails,
    } from './routes';

    function App() {
        return (
            <div>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/show/:showId">
                            <ShowDetails />
                        </Route>
                        <Route exact path="/actor/:actorId">
                            <ActorDetails />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }

    export default App;
