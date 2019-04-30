import React from 'react';
import './App.css';
import ActivityList from '../activityList/ActivityList';
import Form from '../form/Form';

function App() {
  return (
    <div className="App">
      <div className="App left">
        <h2>Add Activity</h2>
        <Form />
      </div>

      <div className="App right">
        <h2>My Activity List</h2><br></br>
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
