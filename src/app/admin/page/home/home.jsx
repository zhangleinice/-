import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/city/action';

@connect(
    state => ({
        citys: state.getCity
    }),
    dispatch => ({ 
        actions: bindActionCreators(actions, dispatch) 
    })
)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citys: []
        }
    }
    componentDidMount() {
        // actions.city();
        this.props.actions.city();
        console.log(this.props);
        // react-redux内封装好了subscript
        // store.subscribe(() => {
        //     this.setState({
        //         citys: store.getState().getCity.city
        //     });
        // })
    }
    // 配合react-redux拿到更新后的state
    componentWillReceiveProps(nextProps) {
        this.setState({
            citys: nextProps.citys.city
        });
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

export default Home;