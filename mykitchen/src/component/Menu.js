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

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="container" key={dish.id}
                    onClick={() => this.onDishSelect(dish)}>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-12 col-md-12 m-1">
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>

                            </div>
                        </div>
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
                <div className="col-12 col-md-12 m-1">
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
                <div className="col-12 col-md-12">
                    <div className="row">
                        <div className="col-md-5 m-1">
                            {menu}
                        </div>
                        <div className="col-md-5 m-1">
                            {this.renderDish(this.state.selectedDish)}
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}
export default Menu;

