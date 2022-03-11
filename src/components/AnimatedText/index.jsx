import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function AnimatedText(props) {
  const { min, max } = props;
  const [numberOfDivs, setNumberOfDivs] = useState();

  useEffect(async () => {
    const interval = setInterval(() => {
      setNumberOfDivs(Math.floor(Math.random() * (max - min + 1) + min));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="container" divList={numberOfDivs}>
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
  );
}

AnimatedText.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
AnimatedText.defaultProps = {
  min: 1,
  max: 5,
};

export default AnimatedText;
