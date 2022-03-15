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

  p {
    height: 400px;
  }
  .span-color {
    color: var(--gray-300);
  }

  // Transformar em componente depois, vlw kelvyn
  .projetos {
    > div {
      position: relative;
      width: 508px;
      height: 314px;
      transform-style: preserve-3d;
      perspective: 500px;

      &:hover {
        background-color: red;
        transform: rotateY(180);
      }
      &.card &.face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
        transition: 1s;
        backface-visibility: hidden;
      }
      .card:hover .face.front {
        transform: rotateY(180deg);
      }

      .card .face.back {
        transform: rotateY(180deg);
      }

      .card:hover .face.back {
        transform: rotateY(360deg);
      }

      .card .face.front::before {
        content: "";
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 50%;
        opacity: 0.5;
      }

      .card .face.front::after {
        content: "";
        position: absolute;
        bottom: 40px;
        right: 80px;
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 50%;
        opacity: 0.7;
      }


    }
  }
`;
