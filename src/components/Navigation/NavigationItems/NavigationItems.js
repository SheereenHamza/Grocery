import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact> Grocery </NavigationItem>
        <NavigationItem link="/cart"> Cart </NavigationItem>
        <NavigationItem link="/orders"> Orders </NavigationItem>
    </ul>
);

export default navigationItems;