import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';


class HomePage extends React.component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }

}