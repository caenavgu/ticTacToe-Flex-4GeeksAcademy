import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Navbar} from '../components/NavBar.jsx';
import {newgame} from './newgame.jsx';
import {board} from './board.jsx';

export class Layout extends React.Component {
    
    render(){

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={newgame} />
                            <Route exact path='/board' component={board} />
                            <Route render={() => <p className="text-center mt-5">Not found</p>} />
                         </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};