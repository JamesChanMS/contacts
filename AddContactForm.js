/**
 * Created by Kim on 2018/5/3.
 */
import React from 'react'
import {KeyboardAvoidingView, View, TextInput, StyleSheet, Button} from 'react-native'
import PropTypes from 'prop-types';
import {Constants} from 'expo';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
    },
});

export default class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
        // store that value in state you can recompute it at a convenient time
        isFormValid: false
    }

    /**
     * 组件更新后 执行 推荐 prefer
     * 不影响页面渲染，页面已经渲染完成，用户已经看到想看的页面，校验在后台进行计算， 用户体验佳！
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        // 当前对象 与 之前对象 比较 避免死循环 prevent infinite loops
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    // 抽取的设置 key value 方法
    // getHandler = key => {
    //     return value => {
    //         this.setState({[key]: value});
    //     }
    // }
    // 和上面一样 精简写法
    getHandler = key => value => {
        this.setState({[key]: value});
    }

    handleNameChange = name => {
        // this.setState() 可以接受一个回调方法（函数） 这里传递一个校验方法
        // 校验方法1 每次更新对象信息时 回调执行 校验方法
        // this.setState({name}, this.validateForm)
        // 校验方法2 每次组件更新时 调用校验方法 性能差不多
        this.setState({name})
    }

    handlePhoneChange = phone => {
        // cast string to number
        // +"123" return 123
        // +"123a" return NaN : not a number
        // +"" return 0
        if (+phone >= 0 && phone.length <= 11) {
            // this.setState() 可以接受一个回调方法（函数） 这里传递一个校验方法
            // 校验方法1 每次更新对象信息时 回调执行 校验方法
            // this.setState({phone}, this.validateForm)
            // 校验方法2 每次组件更新时 调用校验方法 性能一样
            this.setState({phone})
        }
    }

    /**
     * 抽取校验逻辑 每次更新状态对象
     * 推荐 prefer
     */
    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 11 && this.state.name.length >= 3) {
            // return true
            this.setState({isFormValid: true})
        } else {
            // return false
            this.setState({isFormValid: false})
        }
    }
    // 每次返回校验结果 不推荐
    validateForm2 = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 11 && this.state.name.length >= 3) {
            return true
        } else {
            return false
        }
    }

    // 提交数据
    handleSubmit = () => {
        // 方法1
        // this.props.onSubmit({name:this.state.name , phone:this.state.phone})
        // 方法2
        // this.props.onSubmit({...this.state})

        // 校验
        if (+this.state.phone >= 0 && this.state.phone.length === 11 && this.state.name.length >= 3) {
            // 方法3
            this.props.onSubmit(this.state)
        }
    }


    // when the this.state is updated, render might change.
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput style={styles.input} value={this.state.name}
                           onChangeText={this.getHandler("name")}/>
                <TextInput style={styles.input} value={this.state.phone}
                           onChangeText={this.handlePhoneChange}
                           keyboardType="numeric"
                />
                {/*推荐 直接渲染页面 校验放到生命周期更新中做 componentDidUpdate */}
                <Button title="添加联系人" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
                {/*不推荐 内联调用函数 如果这个函数用时较长（如果需要1s），则会影响页面渲染 一直白屏 体验不佳（极差！） */}
                {/*<Button title="添加联系人" onPress={this.handleSubmit} disabled={!this.state.isFormValid2()}/>*/}
            </KeyboardAvoidingView>
        )
    }
}