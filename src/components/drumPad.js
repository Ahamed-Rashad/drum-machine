import React from 'react';
import { Button } from 'react-bootstrap';

const DrumPad = ({ clip, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button variant="outline-secondary" size="lg" block onClick={handleClick}>
      {clip.keyTrigger}
    </Button>
  );
};

export default DrumPad;
