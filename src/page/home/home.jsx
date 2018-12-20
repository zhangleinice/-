import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import * as actions from '../../store/cnode/action';
import { List } from 'antd';

@connect(
    ({operation, getTopics}) => {
        return  {
            operation,
            topics: getTopics
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
            topics: []
        }
    }
    componentDidMount() {
        this.props.actions.getTopics();
    }
    componentWillReceiveProps(nextProps) {
        const {topics , operation} = nextProps;
        switch (operation.type) {
            case 'GET_TOPICS_SUCCESS':
                    this.setState({
                        topics: topics.topics.data
                    }, () => {
                        // this.props.actions.getTopics();
                    });
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
                <h2>cnode</h2>
                {this.props.children}
                <Button type='primary' onClick={this.toList}>to list</Button>
                <Button type="primary" onClick={this.toDetail}>to detail</Button>
                <List
                    bordered
                    dataSource={this.state.topics}
                    renderItem={item => (<List.Item>{item.title}</List.Item>)}
                />
            </div>
        );
    }
}

export default Home;