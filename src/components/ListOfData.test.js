import React from 'react';
import ReactDOM from 'react-dom';
import ListOfData from './ListOfData.tsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListOfData gameData={{races:[]}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
