import React from 'react';
import ReactDOM from 'react-dom';
import NeedCompletionOrders from './NeedCompletionOrders';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NeedCompletionOrders />, div);
  ReactDOM.unmountComponentAtNode(div);
});
