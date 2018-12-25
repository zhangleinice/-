import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.css';

class AppLoading extends Component {
    render() {
        return (
            <div className="c-c-page-loading">
                <div className="load">
                    <Spin size="large" tip="页面载入中..." />
                </div>
            </div>
        );
    }
}

export default AppLoading;