import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end Javascript library',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library for engineers',
  },
  {
    title: 'How to use React?',
    content: 'React is used by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'Red',
  },
  {
    label: 'The Color Black',
    value: 'Black',
  },
  {
    label: 'The Shade of Blue',
    value: 'Blue',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, onSelectedChange] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={onSelectedChange}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
