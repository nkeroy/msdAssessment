import React from 'react';
import {connect} from 'react-redux';
import {deleteActivity} from '../../actions/index';

function mapDispatchToProps(dispatch){
    return {
        deleteActivity: activity => dispatch(deleteActivity(activity))
    };
}

class ConnectedActivity extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     id:"",
        //     title:"",
        //     description:"",
        //     date:""
        // }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event){
        if(window.confirm("Are you sure you want to delete this activity?")){
            this.props.deleteActivity({
                id: this.props.id,
                title: this.props.title,
                description: this.props.description,
                date: this.props.date
            })
        }
    }

    render(){
        return(
        <div className="Activity">
            <label>Id: {this.props.id}</label><br></br>
            <label>Title: {this.props.title}</label><br></br>
            <label>Description: {this.props.description}</label><br></br>
            <label>Date: {this.props.date}</label><br></br>
            <button onClick={this.handleDelete}>Delete</button>
            <br></br>
        </div>
        );
    }
}

const Activity = connect(null,mapDispatchToProps)(ConnectedActivity);

export default Activity;