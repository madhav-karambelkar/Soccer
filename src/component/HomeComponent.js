import React  from "react";
import {Carousel}from 'react-bootstrap';

function ContollCarousel()
{  
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src='/assets/images/trophy1.jpg' alt='First Slide' />
                <Carousel.Caption>
                    <h3>Victory Celebration</h3>
                    <p>We’ve made special templates for the most common Celebrations LifePosts users create.  These individual templates are pre-loaded with relevant questions in the LifeQs area that help you start your thinking about what to say.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  className="d-block w-100" src='/assets/images/France-Trophy.jpg' alt='First Slide' />
                <Carousel.Caption>
                    <h3>France Trophy</h3>
                    <p> This can be used not only for a birth announcement but also for the story of the pregnancy and the first year.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  className="d-block w-100" src='/assets/images/FIFA-trophy.jpeg' alt='First Slide' />
                <Carousel.Caption>
                    <h3>Fifa Trophy</h3>
                    <p>This can be used to announce the engagement and describe the wedding but possibly the best use is to tell the story of the relationship — especially if you get friends and family to add their stories and photos!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const soccers=this.props.soccers.map((soccer)=>{
            if(soccer!=null)
            {
                if((parseInt(soccer.id)%2)==0)
                {
                    return(
                        <div key={soccer.id} className="container">
                            <div className="row row-content">
                                <div className="col-4 col-md-5 mr-1">
                                    <img width="87%" src={soccer.image} alt="ssd" />
                                </div>
                                <div className="col-8 col-md-5 mr-1">
                                    <h3>{soccer.title}</h3>
                                    <p>{soccer.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                else{
                    return(
                        <div key={soccer.id} className="container">
                            <div className="row row-content">
                                <div className="col-8 col-md-5 mr-1">
                                    
                                    <h3>{soccer.title}</h3>
                                    <p>{soccer.description}</p>
                                </div>
                                <div className="col-4 col-md-5 mr-1">
                                    <img width="90%" src={soccer.image} alt='dsds'/>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
            
        });
        return(
            <div>
                <ContollCarousel />
                <h2 className="homeHead">Football Event All Over the Globe</h2>
                {soccers}    
            </div>
            
        );
    }
}
export default Home;
/*
<div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="la.jpg" alt="Los Angeles" width="1100" height="500">
                            <div className="carousel-caption">
                                <h3>Los Angeles</h3>
                                <p>We had such a great time in LA!</p>
                            </div>   
                    </div>
                    <div className="carousel-item">
                        <img src="chicago.jpg" alt="Chicago" width="1100" height="500">
                        <div className="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>   
                    </div>
                    <div className="carousel-item">
                        <img src="ny.jpg" alt="New York" width="1100" height="500">
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>   
                    </div>
                </div>
        
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
*/