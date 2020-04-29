import React , {Component} from 'react';
import Header from '../component/HeaderComponent';
import Players from '../component/PlayersComponent';
import Home from './HomeComponent';
import Feed from './FeedComponent';
import Footer from './FooterComponent';
import {Switch , Redirect , Route} from 'react-router-dom';
class Main extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path='/feed' component={Feed} />
                        <Route path='/players' component ={Players} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;