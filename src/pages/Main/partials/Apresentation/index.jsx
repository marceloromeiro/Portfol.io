import React from 'react';

import { Container } from './styles';

function Apresentation() {
  return (
    <Container>
      <div>
        <h1>
          <span className="span-color">{'< '}</span>
          Projetos
          <span className="span-color">{' />'}</span>
        </h1>

        <div className="projetos">
          <div className="card face front">
            <h1>Projeto 1</h1>
            <p>Resumo aqui de tudo que o projeto faz e tals</p>
          </div>
          <div className="card face back">
            <h1>Projeto 2</h1>
            <p>Resumo aqui de tudo que o projeto faz e tals²</p>
          </div>
        </div>

      </div>

    </Container>
  );
}

export default Apresentation;
