import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';
// import { Container } from './styles';

function Navbar() {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Mais infomações</li>
      </ul>
      <div>
        <a href="#">
          <AiFillGithub />
          Github
        </a>
        <a href="#">
          <AiFillLinkedin />
          LinkedIn
        </a>
      </div>
    </Container>
  );
}

export default Navbar;
