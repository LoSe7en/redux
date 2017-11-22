import React, { Component } from 'react';

import RelForm from './RegForm';

class Rel extends Component {

    render() {
        const { isLoading, handleReg } = this.props;
        return (
            <div>
                <h1 className="center login-text">欢迎使用商品后台管理系统</h1>
                <h2 className="center">请注册</h2>
                <RelForm ref="relForm" isLoading={isLoading} handleReg={handleReg.bind(null, this)} />
            </div>
        )
    }
}

export default Rel;