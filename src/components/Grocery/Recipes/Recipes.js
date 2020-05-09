import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Recipes.module.css';

class Recipes extends Component {

    render() {
        const recipes = this.props.recipes.map((recipe) =>
            <div className={classes.flipCard}>
                <div className={classes.flipCardInner}>
                    <div className={classes.flipCardFront}>
                        <img src={recipe.image} />
                    </div>
                    <div className={classes.flipCardBack}>
                        <h2>{recipe.title}</h2>
                    </div>
                </div>
            </div>
        );
        return (
            <React.Fragment>
                {recipes}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes.recipes
    };
}

export default connect(mapStateToProps)(Recipes);