import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class About extends Component {

    constructor(props) {
        super(props);

    }
    
        
        render() {
            
    
            return (
                <div className="container" style={{width:"1000px", marginTop: "50px"}}>
                    <h2>
                        Who we are:
                    </h2>
                    <hr></hr>
                  <p>We are very happy to anoounce that we have a unique
                      group of software engineers who are working very hard
                      to give you the best experience in your journey to find
                      a knowledgable intern.
                  </p>
                  <h2>
                        What do you do:
                    </h2>
                    <hr></hr>
                    We are developing a platform where you can hire an internt
                    from any part of the world. You can do so by simply post
                    your requirement.
    
                </div>
            );
        }
    }
export default About;
