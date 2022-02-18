import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Tamil',
    value: 'ta',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label={'Select Language'}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />

      <hr />

      <div className="ui header">
        <h3>Output</h3>
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
