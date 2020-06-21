import React from 'react';

import OverallHealth from './OverallHealth';
import TravelHistory from './TravelHistory';
import WorkingFrom from './WorkingFrom';
import TodaysWork from './TodaysWork';
import ThankYou from './ThankYou';

const contentsInPage = (props) => {

    let ret = <p></p>;

    if (props.pageName === 'overallHealth') {
        ret = <OverallHealth/>
    } else if(props.pageName === 'travelHistory') {
        ret = <TravelHistory/>
    } else if(props.pageName === 'workingFrom') {
        ret = <WorkingFrom/>
    } else if(props.pageName === 'todaysWork') {
        ret = <TodaysWork/>
    }else if(props.pageName === 'thankYou') {
        ret = <ThankYou/>
    }
    return ret;
}

export default contentsInPage;