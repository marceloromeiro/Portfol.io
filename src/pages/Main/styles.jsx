import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HelloWorld = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  h1 {
    min-height: 25vh;
    font-size: 21vh;
    margin-top: 8rem;
    margin-bottom: 7rem;
    overflow: hidden;
    border-right: 0.15em solid var(--white);
    white-space: nowrap;
    animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  .animated-block{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 45rem;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--white);
    }
  }
`;
