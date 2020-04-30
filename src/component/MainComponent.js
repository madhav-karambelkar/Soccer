import React , {Component} from 'react';
import Header from '../component/HeaderComponent';
import Players from '../component/PlayersComponent';
import Home from './HomeComponent';
import Feed from './FeedComponent';
import Footer from './FooterComponent';
import {Switch , Redirect , Route} from 'react-router-dom';
import { PLAYERS } from '../shared/players';
class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            players:PLAYERS
        }
    }
    render()
    {
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path='/feed' component={Feed} />
                        <Route exact path='/players' component ={()=><Players players={this.state.players} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;