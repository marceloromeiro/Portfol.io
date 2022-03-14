import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

function AnimatedText(props) {
  const { min, max } = props;
  const [numberOfDivs, setNumberOfDivs] = useState(1);

  useEffect(async () => {
    const interval = setInterval(() => {
      const div = Math.floor(Math.random() * (max - min + 1) + min);
      setNumberOfDivs(div);
      console.log(div);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container divList={numberOfDivs}>
      <span>Olá, eu sou Marcelo e </span>
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
        <div>
          não conserto impressoras
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
  max: 6,
};

export default AnimatedText;
