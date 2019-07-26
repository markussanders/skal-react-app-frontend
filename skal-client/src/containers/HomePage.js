import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <div>
                <div>
                    <NavBar handleProfileClick={this.handleProfileClick}/>
                </div>
                <div>
                    <Search />
                </div>
                <div>
                    <Random />
                </div>
           </div>
        )
    }

}
export default HomePage
