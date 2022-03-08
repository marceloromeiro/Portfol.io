import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';
// import { Container } from './styles';

function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const contact = {
    linkedin: 'https://www.linkedin.com/in/marcelo-souza-52891117a/',
    github: 'https://github.com/marceloromeiro',
  };

  const changeStyle = () => {
    setActiveNavbar(window.scrollY >= 5);
  };

  const redirectContactLink = (link) => {
    window.open(link, '_blank');
  };

  useEffect(() => {
    changeStyle();
    window.addEventListener('scroll', changeStyle);
  });

  return (
    <Container className={activeNavbar && 'actived-navbar'}>
      <ul>
        <li><h1>Portfólio</h1></li>
        <li>Home</li>
        <li>Sobre</li>
        <li>Mais infomações</li>
      </ul>
      <div>
        <button href="#" onClick={() => redirectContactLink(contact.github)} type="button">
          <AiFillGithub />
          Github
        </button>
        <button href="#" onClick={() => redirectContactLink(contact.linkedin)} type="button">
          <AiFillLinkedin />
          LinkedIn
        </button>
      </div>
    </Container>
  );
}

export default Navbar;
