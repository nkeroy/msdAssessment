// src/reducers/index.js
import {ADD_ACTIVITY, DELETE_ACTIVITY} from '../constants/action-types';

const initialState = {
    //activities: []
    activities: []
}

function rootReducer(state=initialState, action){
    if (action.type === ADD_ACTIVITY) {
        return Object.assign({},{
            activities: state.activities.concat([action.payload])
        });
    } else if (action.type === DELETE_ACTIVITY) {
        let newActivites = state.activities.filter(function(activity) { return activity.id !== action.payload.id});
        return Object.assign({}, {
            activities: newActivites
        });

        
    } else {
        return state;
    }
}

export default rootReducer;
