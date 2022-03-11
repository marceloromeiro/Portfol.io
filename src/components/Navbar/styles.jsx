import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  padding: 1rem;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid grey;

  &.actived-navbar {
    transition: background-color 0.3s linear;
    background-color: var(--white);

    * {
      color: var(--gray-800);
      > button {
        background-color: var(--white);
        border: 2px solid var(--gray-800);
      }
    }
  }

  > div {
    display: flex;
    button {
      display: flex;
      align-items: center;

      padding: 1rem;
      margin-left: 0.5rem;

      background: var(--gray-900);
      color: var(--white);
      border: 2px solid var(--white);
      border-radius: 1rem;

      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.6);
        &:nth-child(2) {
          color: #2d69eb;
        }
        &:after {
          filter: brightness(1);
        }
      }
    }
  }

  > ul:first-child {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      box-shadow: 0px var(--white);
      border-radius: 0.3rem;
      padding: 0.3rem;
      transition: box-shadow 0.3s linear;
      margin: 0.5em;

      &:hover {
        box-shadow: 0.2rem 0.2rem 0 0 var(--white),
          -0.2rem -0.2rem 0 0 var(--gray-900);
      }
      > h1 {
        box-shadow: 0px var(--white);
        padding: 0.1rem 0.2rem;
        transition: box-shadow 0.1s linear;
        border-radius: 0.1rem;
        &:hover {
          box-shadow: 0 0 0 0.1rem var(--gray-800);
        }
      }
    }
  }
`;
