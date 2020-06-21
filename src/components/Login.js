import React, {Component} from 'react';

import './../App.css';

import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Login extends Component{

    constructor() {
        super();
        this.state = {
            showGUIDInput: true,
        };
    }

    nextBtnClicked = () => {
        console.log('Next btn clicked..');
        this.setState({
            showGUIDInput: false,
        });
    }

    backBtnClicked = () => {
        console.log('Back btn clicked..');
        this.setState({
            showGUIDInput: true,
        });
    }

    divStyle = {
        minHeight: '150px',
    }

    render () {
        const {showGUIDInput} = this.state;
        console.log('showGUIDInput', showGUIDInput);
        if (showGUIDInput){
            return(
                <div>
                    <div className='App-content' style={this.divStyle}>
                        <p>Enter your EmailID (Ex: abc@xyz.com)</p>
                        <p className='App-hint'>(This is the user id for logging into email account.)</p>
                        <Input prefix={<UserOutlined />}></Input>
                        <br/>
                    </div>
                    <Button type='primary' size='middle' onClick = {this.nextBtnClicked} block >Next</Button>
                </div>
            );
        } else {
            return(
                <div>
                    <div className='App-content' style={this.divStyle}>
                        <p>Enter your password</p>
                        <Input.Password placeholder="Input password" />
                        <br/>
                    </div>
                    <Button type='default' size='large' onClick = {this.backBtnClicked} block>Back</Button>
                    <Button type='primary' size='large' onClick = {this.loginBtnClicked} block >Login</Button>
                </div>
            );
        }
    }
}

export default Login;