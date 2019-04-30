import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addActivity} from '../../actions/index';

function mapDispatchToProps(dispatch){
    return {
        addActivity: activity => dispatch(addActivity(activity))
    };
}

class ConnectedForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 1,
            title: "",
            description: "",
            date: ""
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event){
        this.setState({title: event.target.value});
    }

    handleChangeDesc(event){
        this.setState({description: event.target.value});
    }
    
    handleChangeDate(event){
        this.setState({date: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addActivity({
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        })

        // reset form values to "" except for id
        this.refs.titleField.value="";
        this.refs.descriptionField.value="";
        this.refs.dateField.value="";

        let id = this.state.id + 1;
        this.setState({id: id}); 
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <label>Title: </label><br></br>
                <input id="title" type="text" value={null} ref="titleField" onChange={this.handleChangeTitle}></input><br></br>

                <label>Description: </label><br></br>
                <input id="description" type="text" value={null} ref="descriptionField" onChange={this.handleChangeDesc}></input><br></br>

                <label>Date: </label><br></br>
                <input id="date" type="text" value={null} ref="dateField" onChange={this.handleChangeDate}></input><br></br>

                <br></br>

                <button className="submit" type="submit">Add Activity</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps) (ConnectedForm);

export default Form;