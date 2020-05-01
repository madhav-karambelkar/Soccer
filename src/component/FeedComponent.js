import React  from "react";
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom';
function RenderNews({news})
{
    return(
        <Link to={`/news/${news.id}`} >
            <Media className="mt-5">
            <Media left className="mr-5">
                <Media object src={news.image} alt={news.title} height="100"/>
            </Media>
            <Media body>
                <Media heading>{news.title}</Media>
                <p>By {news.uploader}</p>
                <hr />
                On <p>
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(news.date))}
                    </p>
            </Media>
            </Media>
        </Link>
    );
}
const Feed = (props) =>
{
    const news = props.news.map((news)=>{
        return(
            <div key={news.id} className="col-12 col-md-5 m-1">
                <Media list>
                    <div className="col">
                        <RenderNews news={news} />
                    </div>
                </Media>
            </div>
        );
    });
    if(props.news != null)
    {
        return(
            <div className="container">
                <div className="row">
                    {news}
                </div>
            </div>
        );
    }
}
export default Feed;