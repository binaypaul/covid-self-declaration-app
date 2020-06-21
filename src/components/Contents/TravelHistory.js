import React from 'react';

import { Radio } from 'antd';

class TravelHistory extends React.Component {
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
                        Never left the base location.
                    </Radio>
                    <Radio style={this.radioStyle} value = {2}>
                        Left the base location for domestic travel.
                    </Radio>
                    <Radio style={this.radioStyle} value = {3}>
                        Travelled internationally (if yes - you should subject yourself to home Quarantine for 14 days)
                    </Radio>
                </Radio.Group>
                <br/><br/><br/>
                <p>Have you been exposed to international traveller in last 14 days?</p>
                <Radio.Group onChange = {this.onChange}>
                    <Radio style={this.radioStyle} value = {1}>
                        Yes (you should subject yourself to home Quarantine for 14 days)
                    </Radio>
                    <Radio style={this.radioStyle} value = {2}>
                        No
                    </Radio>
                </Radio.Group>
            </div>
        );
    }
}

export default TravelHistory;