import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Job extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div className="container" style={{ marginleft: '25px', marginright: '25px', bordercolor: 'blue' }}>
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

        );
    }
}
export default Job;



