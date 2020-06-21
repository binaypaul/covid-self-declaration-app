import React from 'react';

import { Radio } from 'antd';

class WorkingFrom extends React.Component {
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
                <p>Have you travelled in last 14 days?</p>
                <Radio.Group onChange = {this.onChange}>
                    <Radio style={this.radioStyle} value = {1}>
                        From home in my base location.
                    </Radio>
                    <Radio style={this.radioStyle} value = {2}>
                        From home in another city outside the base location
                    </Radio>
                    <Radio style={this.radioStyle} value = {3}>
                        From an AC office
                    </Radio>
                    <Radio style={this.radioStyle} value = {4}>
                        Taking the day off
                    </Radio>
                </Radio.Group>
            </div>
        );
    }
}

export default WorkingFrom;