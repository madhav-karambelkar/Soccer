import React from 'react';
import {Link} from 'react-router-dom';
import { CardText , CardBody , CardImg , CardTitle , Card,
    Breadcrumb , BreadcrumbItem} from 'reactstrap';

function DisplayNews({news})
{
    return(
        <div className="col-12 col-md-5 m-1">
               <Card>
                    <CardImg width="100%" src={news.image} alt={news.title} />
                    <CardBody>
                        <CardTitle>{news.title}</CardTitle>
                        <CardText>{news.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}
function DisplayComments({comments})
{
    
    const cmnts = comments.map((comment)=>{
        return(
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
                <hr />
            </li>
        );
    });
    if(comments != null)
    return(
        <div className="col-12 col-md-5 mr-1">
            <h4>Comments</h4>
            {cmnts}
        </div>
    );
}
const News =(props) =>
{
    const news = props.news;
    
    if(news != null)
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb>
                        <BreadcrumbItem>
                        <Link to="/feed">Feed</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{news.id}</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
            
                <DisplayNews news={news} />
                <DisplayComments comments={props.comments} />
            </div>

        </div>
    );
}
export default News;