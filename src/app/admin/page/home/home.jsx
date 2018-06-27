import React, { Component } from 'react';
import {Link} from 'react-router';
import {city} from '../../store/city/action';
import store from '../../store/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citys : []
        }
    }
    componentDidMount() {
        city();
        // 请求成功不代表reducer更新成功
        store.subscribe (() => {
            this.setState({
                citys: store.getState().getCity.city
            });
        })
    }
    render() {
        return (
            <div>
                <div>首页</div>
                {this.props.children}
                <div><Link to = '/list'>to list</Link></div>
                <div><Link to = '/detail'>to detail</Link></div> 
                <div>
                    {
                        this.state.citys.map(item => {
                            return (
                                <div key = {item.value}>{ item.label }</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;