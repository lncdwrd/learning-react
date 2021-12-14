import React from 'react';
import Section from '../Templates/Section';
import classes from './UserList.module.css';

const UserList = (props) => {
  return (
    <Section className={classes.users}>
      <ul>
        {props.data.map((user) => {
          return <li key={user.id}>{`${user.username} (${user.age})`}</li>;
        })}
      </ul>
    </Section>
  );
};

export default UserList;
