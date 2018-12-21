import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/cnode/action';
import MarkDown from 'react-markdown';

@connect(
    ({operation, getTopics}) => ({
        operation, 
        topics: getTopics
    }),
    dispatch => ({ 
        actions: bindActionCreators(actions, dispatch) 
    })
)
@withRouter
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            detail: {}
         };
    }
    componentDidMount() {
        const id = this.props.params.id;
        this.props.actions.getDetail(id);
    }
    componentWillReceiveProps(nextProps) {
        const { operation, topics } = nextProps;
        switch(operation.type) {
            case 'GET_DETAIL_SUCCESS':
                    this.setState({
                        detail: topics.detail.data
                    })
                break;
            default:
                break;
        }
    }
    render() {
        const { detail } = this.state;
        return (
            <div>
                <h2>{detail.title}</h2>
                <MarkDown source={detail.content} escapeHtml={false}/>
            </div>
        );
    }
}

export default Detail;