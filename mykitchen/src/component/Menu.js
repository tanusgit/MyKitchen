import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  comment(dish) {
    var i = 1;
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

  renderDish(dish) {
    if (dish != null)
      return (
          <div className="row">
            <div className="col-md-5">

              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-5">
              <Card>
                <CardText>{this.comment(dish)}</CardText>
              </Card>
            </div>
          </div>
    
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
        
            {this.renderDish(this.state.selectedDish)}
          
        </div>
      </div>
    );
  }
}

export default Menu;

