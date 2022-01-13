import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter('subtract');

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
