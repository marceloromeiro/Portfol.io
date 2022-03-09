import styled from 'styled-components';

export const Container = styled.div`
  > div {
      
    &.content-align {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;
      padding:8rem;

      > h1 {
        overflow: hidden; 
        font-size: 8rem;
        margin-bottom: 35vh;
        width: 45rem;
        border-right: 0.15em solid var(--white); 
        white-space: nowrap; 
        animation: typing 1.0s steps(40, end),
          blink-caret 0.75s step-end infinite;
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
    }
  }
`;
