import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import Arrow from '../../components/Arrow';
import Navbar from '../../components/Navbar';
import Apresentation from './partials/Apresentation';
import { Container, HelloWorld } from './styles';

// import { Container } from './styles';

function Main() {
  return (
    <Container>

      <Navbar />
      <HelloWorld>
        <h1>Hello World!</h1>
        <div className="teste">
          <AnimatedText />
          <Arrow />
        </div>
      </HelloWorld>

      <Apresentation />
    </Container>

  );
}

export default Main;
