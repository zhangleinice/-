import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppLoading from './component/page-loading';

@connect(
    ({operation}) => ({operation})
)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props);
        
        // if(this.props.operation.status === 'PENDING'){
        //     return <AppLoading/>
        // }

        //无权限时加载loading
        // if(this.props.operation.loading){
        //     return <AppLoading/>
        // }
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

export default App;