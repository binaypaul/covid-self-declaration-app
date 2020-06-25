import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import StepsInHome from './StepsInHome';
import Login from './../Login';

import './../../App.css';
import { urlsOnHomePage } from './../../assets/urls'
import covidSelfAssImg from './../../assets/images/covidSelfAss.jpg';
const {Footer, Content} = Layout;

class HomePageLayout extends React.Component{

    constructor() {
        super();
        this.state = {
            loginBtnClicked: false,
        };
    }

    loginBtnClicked = () => {
        console.log('Login button clicked in Login.js..');
        this.setState({
            loginBtnClicked: true,
        });
    }

    render() {
        const {loginBtnClicked} = this.state;
        return (
            <div>
                <Layout className='layout'>
                    <Content>
                        <div className='App-header'>
                            <img src={covidSelfAssImg} alt='imageNotAvailable'/>
                        </div>
                        <br/>
                        {!loginBtnClicked && 
                            <Login loginBtnClicked = {this.loginBtnClicked}/>
                        }
                        {loginBtnClicked &&
                            <StepsInHome />
                        }
                    </Content>
                    <Footer>
                        <Button type='link' danger='true' href={urlsOnHomePage.myGovCOVID19}>My Gov COVID-19</Button> <br />
                        <Button type='link' danger='true' href={urlsOnHomePage.indiaCOVID19Tracker}>India COVID-19 Tracker</Button>
                    </Footer>
                </Layout>
            </div>
        )
    }
}


export default HomePageLayout;