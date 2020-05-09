
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions';
import classes from './IngredientCard.module.css';

class IngredientCard extends Component {

    constructor() {
        super();
        this.state = {
            quantity: 0
        }
    }

    quantityChangedHandler = (event) => {
        const quantity = event.target.value;
        this.setState({ ...this.state, quantity: quantity });
    }

    addToCart = (ingredient) => {
        this.props.onAddItemToCart(ingredient);
    }

    render() {
        const ing = this.props.ingredient;
        const imageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/' + ing.image;
        const ingredient = {
            id: ing.id,
            name: ing.name,
            costUnit: ing.estimatedCost.unit,
            costValue: ing.estimatedCost.value,
            image: imageUrl,
            quantity: this.state.quantity
        };
        let ingredientCard = null;
        if (ingredient != null) {
            ingredientCard = <div className={classes.card}>
                <img src={ingredient.image} alt={ingredient.name} />
                <h1>{ingredient.name}</h1>
                <p className="price">{ingredient.costUnit}{ingredient.costValue}</p>
                <input
                    className={classes.quantity}
                    value={this.state.quantity}
                    type='number'
                    placeholder='Quantity'
                    min='1'
                    max='10'
                    onChange={this.quantityChangedHandler} />
                <button onClick={() => this.addToCart(ingredient)}>Add To Cart</button>
            </div>;
        }
        return (
            <React.Fragment>
                {ingredientCard}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToCart: (item) => dispatch(actions.add(item))
    };
}

export default connect(null, mapDispatchToProps)(IngredientCard);
