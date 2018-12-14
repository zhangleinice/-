import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import * as actions from '../../store/city/action';

@connect(
    ({getCity, operation}) => {
        return  {
            operation,
            citys: getCity
        }
    },
    dispatch => ({ 
        actions: bindActionCreators(actions, dispatch) 
    })
)
// withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
@withRouter
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citys: []
        }
    }
    componentDidMount() {
        this.props.actions.city();
    }
    // 配合react-redux拿到更新后的state
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        const {citys , operation} = nextProps;
        // this.setState({
        //     citys: citys.city.data
        // })
        //添加了opeation reducer后
        switch (operation.type) {
            case 'CITY_SUCCESS':
                    this.setState({
                        citys: citys.city.data
                    }, () => {
                        this.props.actions.num();
                    });
                break;
            case 'NUM_SUCCESS':
                    console.log(citys);
                break;
            default:
                break;
        };
    }
    // 路由跳转
    toList = () => {
        this.props.router.push('/list')
    }
    toDetail = () => {
        this.props.router.push('/detail')
    }
    render() {
        return (
            <div>
                <div>首页</div>
                {this.props.children}
                <Button type='primary' onClick={this.toList}>to list</Button>
                <Button type="primary" onClick={this.toDetail}>to detail</Button>
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

export default Home;