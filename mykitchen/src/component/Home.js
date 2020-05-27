import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Home extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div className="container" >
                <h1>Inside home page</h1>
               <div className ="card">
                <Card inverse>
                    
                    <CardImgOverlay>
                        <CardTitle style={{color: "black"}}>Card Title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
            </div>
        );
    }
}
export default Home;


