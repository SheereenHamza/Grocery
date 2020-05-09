import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {

    constructor() {
        super();
        this.state = {
            showSideDrawer: true
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Toolbar />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}



export default Layout;