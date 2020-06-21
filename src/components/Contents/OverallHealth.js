import React from 'react';

import { Radio } from 'antd';

class OverallHealth extends React.Component {
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
                <p>How are you doing today?</p>
                <Radio.Group onChange = {this.onChange}>
                    <Radio style={this.radioStyle} value = {1}>
                        Very well
                    </Radio>
                    <Radio style={this.radioStyle} value = {2}>
                        Not very well
                    </Radio>
                </Radio.Group>
            </div>
        );
    }
}

export default OverallHealth;