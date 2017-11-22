import React, { Component } from 'react';

import LoginForm from './LoginForm.js';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        return (
            <div>
                <h1 className="center login-text">欢迎使用商品后台管理系统</h1>
                <h2 className="center">请登录</h2>
                <LoginForm />
            </div>
        );
    }
}

export default Login;