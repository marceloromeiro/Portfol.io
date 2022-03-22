import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import Arrow from '../../components/Arrow';
import Navbar from '../../components/Navbar';
import Apresentation from './partials/Apresentation';
import Skills from './partials/Skills';
import { Container, HelloWorld } from './styles';

// import { Container } from './styles';

function Main() {
  return (
    <Container>

      <Navbar />
      <HelloWorld>
        <h1>Hello World!</h1>
        <div className="animated-block">
          <AnimatedText />
          <Arrow />
        </div>
      </HelloWorld>

      <Apresentation />
      <Skills />
    </Container>

  );
}

export default Main;
