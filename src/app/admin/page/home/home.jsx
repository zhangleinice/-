import React, { Component } from 'react';
import {Link} from 'react-router';
import {city} from '../../store/city/action';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        city();
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