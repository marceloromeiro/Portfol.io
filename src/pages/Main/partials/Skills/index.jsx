import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { Container } from './styles';

function Skills() {
  return (
    <Container>
      <h1>
        <span className="span-color">{'< '}</span>
        Skills
        <span className="span-color">{' >'}</span>
      </h1>

      <div>
        <span>
          <FaReact />
          <h2>React</h2>
          <p>Talvez um texto</p>
        </span>
        <span>
          <FaNodeJs />
          <h2>Node</h2>
          <p>Talvez um texto</p>
        </span>
        <span>
          <SiMicrosoftsqlserver />
          <h2>SQL Server</h2>
          <p>Talvez um texto</p>
        </span>
      </div>

      <h1>
        <span className="span-color">{'</ '}</span>
        Skills
        <span className="span-color">{' >'}</span>
      </h1>
    </Container>
  );
}

export default Skills;
