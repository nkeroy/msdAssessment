// src/js/actions
import {ADD_ACTIVITY, DELETE_ACTIVITY} from '../constants/action-types';
//import { types } from "@babel/core";

export function addActivity(payload){
    return {
        type: ADD_ACTIVITY,
        payload,
    }
};

export function deleteActivity(payload){
    return {
        type: DELETE_ACTIVITY,
        payload,
    }
};