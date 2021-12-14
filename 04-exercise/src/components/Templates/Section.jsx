import React from 'react';
import classes from './Section.module.css';

const Section = (props) => {
  return (
    <section
      className={`${classes.card}${
        props.className ? ` ${props.className}` : ''
      }`}
    >
      {props.children}
    </section>
  );
};

export default Section;
