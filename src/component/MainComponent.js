import React , {Component} from 'react';
import Header from '../component/HeaderComponent';
import Players from '../component/PlayersComponent';
import Home from './HomeComponent';
import Feed from './FeedComponent';
import Footer from './FooterComponent';
import {Switch , Redirect , Route} from 'react-router-dom';
import { PLAYERS } from '../shared/players';
import { NEWS } from '../shared/news';
import News from './NewsDetailComponent';
import {COMMENTS} from '../shared/comments';
import {SOCCER , CaroDetail} from '../shared/homeInfo';
class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            players:PLAYERS,
            news : NEWS,
            comments:COMMENTS,
            soccerInfo : SOCCER,
            caros : CaroDetail
        }
    }
    render()
    {
        const NewsWithId = ({match}) =>
        {
            console.log("ID:-"+match.params.newsId+"\n News:-"+this.state.news.id);
            return(
                <News 
                news={this.state.news.filter((news)=> news.id === parseInt(match.params.newsId,10))[0]} 
                comments={this.state.comments.filter((comment)=> comment.newsId === parseInt(match.params.newsId,10))}
                />
            );
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={()=> <Home soccers={this.state.soccerInfo} caros={this.state.caros} />} />
                        <Route exact path='/feed' component={() => <Feed news={this.state.news}/>} />
                        <Route path='/news/:newsId' component={NewsWithId} />
                        <Route exact path='/players' component ={()=><Players players={this.state.players} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;