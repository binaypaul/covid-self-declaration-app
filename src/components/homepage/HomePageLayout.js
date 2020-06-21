import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import StepsInHome from './StepsInHome';
import Login from './../Login';

import './../../App.css';
import { urlsOnHomePage } from './../../assets/urls'
import covidSelfAssImg from './../../assets/images/covidSelfAss.jpg';
const {Footer, Content} = Layout;

const homePageLayout = () => {
    return (
        <div>
            <Layout className='layout'>
                <Content>
                    <div className='App-header'>
                        <img src={covidSelfAssImg} alt='imageNotAvailable'/>
                    </div>
                    <br/>
                    <div style={{minHeight: '300px'}}>
                        <Login />
                    </div>
                    <div>
                        <StepsInHome />
                    </div>
                </Content>
                <Footer>
                    <Button type='link' danger='true' href={urlsOnHomePage.myGovCOVID19}>My Gov COVID-19</Button> <br />
                    <Button type='link' danger='true' href={urlsOnHomePage.indiaCOVID19Tracker}>India COVID-19 Tracker</Button>
                </Footer>
            </Layout>
        </div>
    );
}

export default homePageLayout;