import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DrumPad from './drumPad';
import audioClips from './audioClips';

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const playSound = (clip) => {
    const sound = new Audio(clip);
    sound.play();
    setDisplay(clip.replace(/^(.*\/)|(\..*)/g, ''));
  };

  const renderDrumPads = () => {
    return audioClips.map((clip) => (
      <DrumPad key={clip.id} clip={clip} onClick={() => playSound(clip.url)} />
    ));
  };

  return (
    <Container id="drum-machine" className="pt-5">
      <Row>
        <Col>
          <h2>Drum Machine</h2>
        </Col>
      </Row>
      <Row>
        <Col>{renderDrumPads()}</Col>
      </Row>
      <Row>
        <Col>
          <div id="display" className="display">
            {display}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DrumMachine;
