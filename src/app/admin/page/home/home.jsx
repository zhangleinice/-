import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/city/action';
import store from '../../store/index';

// @connect(
//     state => {
//         console.log(state);
//     },
//     dispatch => bindActionCreators(action, dispatch)
// );
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citys: []
        }
    }
    componentDidMount() {
        console.log(this.props);
        // actions.city();
        // 请求成功不代表reducer更新成功
        store.subscribe(() => {
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
                <div><Link to='/list'>to list</Link></div>
                <div><Link to='/detail'>to detail</Link></div>
                <div>
                    {
                        this.state.citys.map(item => {
                            return (
                                <div key={item.value}>{item.label}</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


// 使用异步actions时，必须配置中间件
export default connect(
    state => state.getCity,
    dispatch =>{
       return {
            a: () => dispatch(actions.city())
       } 
    }
)(Home);