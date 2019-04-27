import React from 'react';
import ReactDOM from 'react-dom';
import AccordionList from './AccordionList.tsx';
import ShallowRenderer from 'react-test-renderer/shallow';


const starts = [{
  number: "string",
  driver: {
      firstName: "string",
      lastName: "string"
  },
  horse: {
      name: "string",

      trainer: {
          firstName: "string",
          lastName: "string"
      },
      pedigree: { father: { name: "string" } }
  },
  startTime: "string"
},
{
  number: "string",
  driver: {
      firstName: "string",
      lastName: "string"
  },
  horse: {
      name: "string",

      trainer: {
          firstName: "string",
          lastName: "string"
      },
      pedigree: { father: { name: "string" } }
  },
  startTime: "string"
}
]

it('renders correctly', () => {
  const renderer = new ShallowRenderer()
  const tree = renderer
    .render(<AccordionList 
      starts={starts} />)
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccordionList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
