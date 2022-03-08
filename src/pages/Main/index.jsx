import React from 'react';
import Arrow from '../../components/Arrow';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

// import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Navbar />
      <div className="content-align">
        <h1 className="line-1 anim-typewriter">Hello World!</h1>
        <Arrow />
      </div>
    </Container>
  );
}

export default Main;
