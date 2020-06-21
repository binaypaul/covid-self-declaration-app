import React from 'react';

import { Radio } from 'antd';

class TodaysWork extends React.Component {
    constructor () {
        super();
        this.state = {
            value: 1,
        }
    }

    radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    onChange = (e) => {
        console.log ("radio checked", e.target.value)
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <p>Are you able to complete your tasks as expected yesterday (or last working day)?</p>
                <Radio.Group onChange = {this.onChange}>
                    <Radio style={this.radioStyle} value = {1}>
                        Yes
                    </Radio>
                    <Radio style={this.radioStyle} value = {2}>
                        No
                    </Radio>
                </Radio.Group>
            </div>
        );
    }
}

export default TodaysWork;