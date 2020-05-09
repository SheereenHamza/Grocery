
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';
import IngredientCard from './IngredientCard/IngredientCard';
import classes from './Ingredient.module.css';

class Ingredients extends Component {

    inputChangedHandler = (event) => {
        this.props.onSearchValues(event.target.value);
    }

    ingredientSelectedHandler = (event) => {
        const ingredient = event.target.value;
        let ingredientId = null;
        if (this.props.searchValues != null && (ingredient != null || ingredient != '')) {
            this.props.searchValues.map((value) => {
                if (value.name == ingredient) {
                    ingredientId = value.id;
                }
            })
            this.props.onShowIngredientDetails(ingredientId);
        }
    }

    render() {
        let options = null;
        if (this.props.searchValues != null) {
            options = this.props.searchValues.map((value) =>
                <option key={value.name} value={value.name}>{value.name}</option>
            )
        }

        return (
            <React.Fragment>
                <div className={[classes.split, classes.left].join(' ')}>
                    <div className={classes.centered}>
                        <input
                            className={classes.Input}
                            type='text'
                            placeholder=' --- Select an Ingredient --- '
                            onChange={(event) => this.inputChangedHandler(event)} />
                        <select
                            className={classes.Select}
                            onChange={this.ingredientSelectedHandler}>
                            {options}
                        </select>
                    </div>
                </div>
                <div className={[classes.split, classes.right].join(' ')}>
                    <div className={classes.centered}>
                        {
                            this.props.ingredientDetails &&
                            <IngredientCard ingredient={this.props.ingredientDetails} />
                        }

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchValues: state.ings.searchValues,
        ingredientDetails: state.ings.ingredientDetails
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchValues: (searchValue) => dispatch(actions.searchIngs(searchValue)),
        onShowIngredientDetails: (ingredientId) => dispatch(actions.fetchIngsDetails(ingredientId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
