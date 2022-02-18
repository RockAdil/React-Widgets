import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [acticeIndex, setActiceIndex] = useState(null);

  const onTitleClicked = index => {
    setActiceIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === acticeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
