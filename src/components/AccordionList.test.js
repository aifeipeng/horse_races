import React from 'react';
import ReactDOM from 'react-dom';
import AccordionList from './AccordionList.tsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccordionList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
