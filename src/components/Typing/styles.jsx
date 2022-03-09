import styled from 'styled-components';

export const Container = styled.div`
  width: min-content;
  margin: 0;
  > div {
    overflow: hidden;
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    border-right: 0.15em solid var(--white);

    > * {
    width: auto;
    white-space: nowrap;
  }
  }


  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: auto;
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
