import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('loads json file immediately when page loads', () => {

}
);

it('displays weather info when valid date input', () => {

}
);

it('displays NO weather info when invalid date input, or no input', () => {

}
);