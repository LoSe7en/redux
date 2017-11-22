import React, { Component } from 'react';

import { Form, Icon, Input, Button, Radio } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class RelForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form className="login-form" ref="relForm">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入账号！'}],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('conPassword', {
                        rules: [
                            { required: true, message: '请再次输入密码！'}
                        ],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请再次输入密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [
                            { required: true, message: '请输入手机号！'},
                            { pattern: /^1[34578]\d{9}$/, message: '手机号格式有误！'}
                        ]
                    })(
                        <Input prefix={<Icon type="mobile" style={{ fontSize: 13 }} />} type="text" placeholder="请输入手机号" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                >
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: '请选择性别！'}],
                    })(
                        <RadioGroup>
                            <Radio value="男">男</Radio>
                            <Radio value="女">女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem>
                    <a className="login-form-forgot" href="/login">返回</a>
                    <Button loading={this.props.isLoading} type="primary" onClick={this.props.handleReg} className="login-form-button">
                        注册
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(RelForm);