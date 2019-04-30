import React from 'react';
import {connect} from 'react-redux';
import Activity from '../activity/Activity';

export const mapStateToProps = state => {
    return {
        activities: state.activities 
    };
};

const connectedActivityList = ({activities}) => (
    <ul>
        {activities.map(activity => (
            <li>
                {/* <label>Title: {activity.title}</label><br></br>
                <label>Description: {activity.description}</label><br></br>
                <label>Date: {activity.date}</label><br></br>
                <br></br> */}
                <Activity id={activity.id} title={activity.title} description={activity.description} date={activity.date}/><br></br>
            </li>
            ))
        }
    </ul>
);

const ActivityList = connect(mapStateToProps)(connectedActivityList);

export default ActivityList;