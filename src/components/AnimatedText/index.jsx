import React from 'react';

import { Container } from './styles';

function AnimatedText() {
  return (
    <body>
      <Container className="container">
        Olá, eu sou Marcelo e
        {' '}
        <div className="dropping-texts">
          <div>
            sou Software Developer
          </div>
          <div>
            gosto de Jogos
          </div>
          <div>
            como muito chocolate
          </div>
          <div>
            gosto de Front-end
          </div>
          <div>
            não sou o Batman
          </div>
        </div>
      </Container>
    </body>
  );
}

export default AnimatedText;
