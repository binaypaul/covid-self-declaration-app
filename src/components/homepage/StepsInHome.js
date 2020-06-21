import React, { Component } from 'react';

import {Steps, Button, message} from 'antd';

import ContentsInPage from '../Contents/ContentsInPage';

import './../../App.css';

const { Step } = Steps;

const steps = [
    {
        title: 'Overall Health',
        content: <ContentsInPage pageName='overallHealth'/>
    },
    {
        title: 'Travel History',
        content: <ContentsInPage pageName='travelHistory'/>,
    },
    {
        title: 'Working From',
        content: <ContentsInPage pageName='workingFrom'/>,
    },
    {
        title: 'Todays Work',
        content: <ContentsInPage pageName='todaysWork'/>,
    },
    {
        title: 'Thank You',
        content: <ContentsInPage pageName='thankYou'/>
    }
]

class StepsInHome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current: 0,
        }
    }
    next() {
        let current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        let current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <div className='App-content'>
                <Steps current = {current} >
                    {steps.map(item => (
                        <Step key = {item.title} title= {item.title} />
                    ))}
                </Steps>
                <br></br>
                <div className="steps-content" style={{minHeight: '300px'}}>{steps[current].content}</div>
                <br></br>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                        Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                        Previous
                        </Button>
                    )}
                </div>
            </div>
        )
    }
}

export default StepsInHome;