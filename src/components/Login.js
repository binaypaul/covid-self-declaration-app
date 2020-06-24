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
        minHeight: '200px',
    }

    render () {
        const {showGUIDInput} = this.state;
        console.log('showGUIDInput', showGUIDInput);
        if (showGUIDInput){
            return(
                <div>
                    <div className='App-content' style={this.divStyle}>
                        <p>Enter your email (Ex: abc@xyz.com)</p>
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
                        <p className='App-hint'>(This is the password for logging into email account.)</p>
                        <Input.Password placeholder="Input password" />
                        <br/>
                    </div>
                    <Button type='default' size='middle' onClick = {this.backBtnClicked} block>Back</Button>
                    <Button type='primary' size='middle' onClick = {this.loginBtnClicked} block >Login</Button>
                </div>
            );
        }
        // return(
        //     <div className='App-content' style={this.divStyle}>
        //         {showGUIDInput && 
        //             <div>
        //                 <p>Enter your email (Ex: abc@xyz.com)</p>
        //                 <p className='App-hint'>(This is the user id for logging into email account.)</p>
        //                 <Input prefix={<UserOutlined />}></Input>
        //                 <br/><br/>
        //                 <Button type='primary' size='middle' onClick = {this.nextBtnClicked} >Next</Button>
        //             </div>
        //         }
        //         {!showGUIDInput &&
        //         <div>
        //             <p>Enter your password</p>
        //             <Input.Password placeholder="Input password" /> 
        //             <br/><br/>
        //             <Button type='default' size='middle' onClick = {this.backBtnClicked}>Back</Button>
        //             <Button type='primary' size='middle' onClick = {this.loginBtnClicked} >Login</Button>
        //         </div>
        //         }
        //     </div>
        // );


    }
}

export default Login;