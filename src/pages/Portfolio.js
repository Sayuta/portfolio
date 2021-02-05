import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import p_pokemon from '../p_topics/p_pokemon';

const Portfolio = () => {
    let { path, url } = useRouteMatch();
    return (
    <div className="page">
        <div className="container pt-4">
            <div className="row text-center">
                <div className="col-12">
                    <Switch>
                    <Route exact path={path}>
                    <h1>Portfolio</h1>
                    <p>Under construction</p>
                    <Link to={`${url}/sapoketa`}>Sapoketa</Link> Unity Engine
                    </Route>
                    <Route path={`${path}/sapoketa`} component={p_pokemon}></Route>
                    </Switch>
                    
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Portfolio;