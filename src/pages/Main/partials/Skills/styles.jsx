import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20vh;
  background-color: var(--white);
  width: 65rem;

  padding: 2rem;
  color: var(--gray-800);
  border-radius: 0.2rem;
  box-shadow: 0.4rem 0.4rem 0 0 var(--gray-300),
    -0.4rem -0.4rem 0 0 var(--gray-800);

    > div {
        display: flex;
        justify-content: space-between;
        padding: 5rem;
        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            svg{
                margin-bottom: 1rem;
                &:hover{
                    box-shadow:0.4rem 0.4rem 0 0 var(--gray-300), -0.4rem -0.4rem 0 0 var(--gray-800);;
                    border-radius: 1.5rem;
                    transition: all 0.2s ease-out;
                }
                font-size: 100px;
            }
        }
    }
`;
