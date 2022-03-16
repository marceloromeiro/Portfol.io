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

    .project-header{
        padding-bottom: 1rem;
    }

  .span-color {
    color: var(--gray-300);
  }

  // Transformar em componente depois, vlw kelvyn
  .projetos {
    > div {


      .image {
        display: flex;
        align-items: flex-end;
        transition: box-shadow 0.3s linear;
        border-radius: 0.2rem;
        box-shadow: -0.3rem 0.3rem 0.2rem 0 var(--gray-900);

        width: 49.7vw;
        height: 50vh;

        img {
            max-width: 100%;
            max-height: 100%;
        }
        &:hover {
            color:var(--gray-800);
            cursor: pointer;
            box-shadow: 0.2rem 0.2rem 0.2rem 0 var(--gray-900);
            span{
                opacity: 1;
                position: absolute;
                background-color: var(--white);
                border: 1px solid var(--gray-300);
                opacity: 0.9;

            }
        }
        span {
            opacity: 0;
            position: absolute;
            transition: opacity 0.3s linear ;

            padding: 0.5rem;
            height: 20%;
            width: 49.7vw;

            border-radius: 0.2rem;
            font-weight: 600;
        }
      }
     .content {
        padding: 3vh;
        height:calc(30vh + 3vh);
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
