import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    var i = 1;
    const dish = this.props.recipe;
    return (<>{dish.comments.map((c) => (
      <>
      <p>Comment# {i++}</p>
      <ul>
        <li>{c.author}</li>
        <li>{c.date}</li>
        <li>{c.comment}</li>
      </ul>
      </>)
    )}</>
    )
  }

}

 export default DishDetail;