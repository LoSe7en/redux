import { connect } from 'react-redux';
import Reg from '../../components/reg/Reg.js';
import submitReg from '../../actions/reg.js';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    //返回UI组件属性与state属性的映射关系对象
    return {
        isLoading: state.isLoading
    }
};

const mapDispatchToProps =(dispatch, ownProps) => {
    return {
        handleReg: (ui) => {
            ui.refs.relForm.validateFields((err, values) => {
                if (!err) {
                    //验证两次密码是否一致
                    if(values.password !== values.conPassword) {
                        ui.refs.relForm.setFields({
                            conPassword: {
                                value: values.conPassword,
                                errors: [new Error('两次输入密码不一致！')],
                            },
                        });
                    } else {
                        console.log(submitReg());
                        //dispatch(submitReg())
                    }
                }
            })
        }
    }
};

const RelLogic = connect(mapStateToProps, mapDispatchToProps)(Reg)

export default RelLogic;