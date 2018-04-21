import React from 'react';
import ReactDOM from 'react-dom';
import IncomingOrders from './IncomingOrders';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IncomingOrders />, div);
  ReactDOM.unmountComponentAtNode(div);
});
