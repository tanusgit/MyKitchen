import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Job extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (

            <div className="container" style={{ marginleft: '25px', marginright: '25px', bordercolor: 'blue' }}>
                <div className="row">
                    <div className="col-md-5 m-2">
                        <Card>
                            <CardImg src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button href="https://reactstrap.github.io/components/card/">Button</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5 m-2">
                        <Card>
                            <CardImg src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button href="https://reactstrap.github.io/components/card/">Button</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}
export default Job;



/*<div className="container" style={{ marginleft: '25px', marginright: '25px', bordercolor: 'blue' }}>
                    <div id="co">
                    <aside>
                        <p>Your job post is here: </p>
                    </aside>
                    <section>
                        <h1>Post your job here</h1>
                        <hr></hr>
                        <p>we are Jobpost group.We have amazing team to find you
                        best intern.</p>
                    </section>
                    <section>
                        <h1> About us </h1>
                        <hr></hr>
                        <p> We are here to help you find amazing interns. So
                        use this platform to get your desired intern. Make sure
                        you fill all the form in order to post your job.
                        </p>
                    </section>
                </div>
                </div>
*/