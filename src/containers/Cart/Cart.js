
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import classes from './Cart.module.css';
import Recipes from '../../components/Grocery/Recipes/Recipes';

class Cart extends Component {

    render() {
        let itemsString = '';
        this.props.items.map((item, id) => {
            if (id == 0) {
                itemsString += item.name
            } else {
                itemsString += ',+' + item.name
            }
        });

        this.props.onFetchRecipes(itemsString);

        const cart = this.props.items.map((item) =>
            <div className={classes.cartItem}>
                <img src={item.image} />
                <div>
                    <h3>{item.name}</h3>
                    <span>Qty: {item.quantity}</span>
                    <span>{item.costUnit}{item.costValue}</span>
                </div>
            </div>
        );

        return (
            <React.Fragment>
                <div className={[classes.split, classes.left].join(' ')}>
                    <div className={classes.centered}>
                        {cart}
                    </div>
                </div>
                <div className={[classes.split, classes.right].join(' ')}>
                    <div className={classes.centered}>
                        <Recipes />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItemFromCart: (item) => dispatch(actions.remove(item)),
        onFetchRecipes: (itemsString) => dispatch(actions.fetchRecipes(itemsString))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
