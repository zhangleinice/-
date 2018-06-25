import React, { Component } from 'react';
import {Link} from 'react-router';
import { Cityinside } from '../../../common/api/city';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        (async () => {
            try {
                let city = await Cityinside();
                console.log(city.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }
    render() {
        return (
            <div>
                <div>首页</div>
                <div><Link to = '/list'>to list</Link></div>
                <div><Link to = '/detail'>to detail</Link></div> 
                {this.props.children}
            </div>
        );
    }
}

export default Home;